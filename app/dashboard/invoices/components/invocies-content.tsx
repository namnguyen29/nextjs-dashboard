"use client";
import { jpHttp } from "@/app/utils";
import { useEffect } from "react";

export default function InvociesContent() {
  // const revenue = await fetchRevenue();
  // console.log("invocie rev::", revenue);
  useEffect(() => {
    const fetchPosts = () => {
      setTimeout(async () => {
        const res = await jpHttp.get("/posts");
        console.log("res::", res);
      }, 4000);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <p>Invoices content</p>
    </div>
  );
}
