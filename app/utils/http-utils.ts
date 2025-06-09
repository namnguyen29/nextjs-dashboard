import { HttpErrorMessage } from "../types";

export class HttpError extends Error {
  private readonly status: number;
  private readonly errorMessage: string;

  constructor(message: string, status: number) {
    super(message);
    this.errorMessage = message;
    this.status = status;
  }

  get httpError(): HttpErrorMessage {
    return {
      status: this.status,
      message: this.errorMessage,
    };
  }
}

class HttpBase {
  private defaultHeaders: Record<string, string>;
  private readonly baseUrl: string = "";

  constructor(baseUrl: string, defaultHeaders: Record<string, string> = {}) {
    if (!baseUrl) {
      this.baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;
    } else {
      this.baseUrl = baseUrl;
    }
    this.defaultHeaders = {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
      ...defaultHeaders,
    };
  }

  public async get<T>(endpoint: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...init,
      method: "GET",
      headers: this.getHeaders(),
    });
    return this.handleResponse<T>(response);
  }

  public async post<T, B = unknown>(endpoint: string, body?: B, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...init,
      method: "POST",
      body: JSON.stringify(body),
      headers: this.getHeaders(),
    });
    return this.handleResponse<T>(response);
  }

  public async put<T, B = unknown>(endpoint: string, body?: B, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...init,
      method: "PUT",
      body: JSON.stringify(body),
      headers: this.getHeaders(),
    });
    return this.handleResponse<T>(response);
  }

  public async delete<T>(endpoint: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...init,
      method: "DELETE",
      headers: this.getHeaders(),
    });
    return this.handleResponse<T>(response);
  }

  public setHeader(key: string, value: string): void {
    this.defaultHeaders[key] = value;
  }

  private getHeaders(): Record<string, string> {
    return this.defaultHeaders;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new HttpError(response.statusText, response.status);
    }
    return response.json() as Promise<T>;
  }
}

export const jpHttp = new HttpBase(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL}`);
