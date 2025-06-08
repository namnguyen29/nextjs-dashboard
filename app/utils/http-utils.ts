export type HttpErrorMessage = {
  status: number;
  message: string;
};

class HttpUtilError extends Error {
  private readonly errorMessage: string;
  private readonly httpStatus: number;

  constructor(statusText: string, status: number) {
    super();
    this.errorMessage = statusText;
    this.httpStatus = status;
  }

  get httpErrorMessage(): HttpErrorMessage {
    return {
      status: this.httpStatus,
      message: this.errorMessage,
    };
  }
}

class HttpUtil {
  private defaultHeaders: Record<string, string>;
  private readonly baseUrl: string = "";
  constructor(baseUrl: string, defaultHeaders: Record<string, string> = {}) {
    this.baseUrl = baseUrl;
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
      const error = new HttpUtilError(response.statusText, response.status);
      throw error.httpErrorMessage;
    }
    return response.json() as Promise<T>;
  }
}

export const jpHttp = new HttpUtil(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL}`);
