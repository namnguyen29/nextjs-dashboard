"use client";
import { useEffect } from "react";

type Props = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function ErrorPage({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}

/**
 * Another way you can handle errors gracefully is by using the notFound function.
 * While error.tsx is useful for catching uncaught exceptions,
 * notFound can be used when you try to fetch a resource that doesn't exist.
 */
