"use client";
import { jpHttp } from "@/app/utils";
import { useEffect, useRef } from "react";

export default function InvociesContent() {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchPosts = () => {
      timerRef.current = setTimeout(async () => {
        await jpHttp.get("/posts");
      }, 4000);
    };
    fetchPosts();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>Invoices content</p>
    </div>
  );
}
