import { useEffect, useRef, useState } from "react";

type DebounceFn = (...args: unknown[]) => void;

export function useDebounce<T>(value: T, delay: number): T;
export function useDebounce(fn: DebounceFn, delay: number): DebounceFn;

export function useDebounce<T>(input: T | DebounceFn, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

  useEffect(() => {
    if (typeof input === "function") return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [input, delay]);

  if (typeof input === "function") {
    const fn = input as DebounceFn;
    return (...args: unknown[]) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  return debouncedValue;
}
