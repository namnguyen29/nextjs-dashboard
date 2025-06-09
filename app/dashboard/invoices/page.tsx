"use client";
import dynamic from "next/dynamic";

const DynamicInvoicesContent = dynamic(() => import("./components/invocies-content"), {
  ssr: false,
  loading: () => <p>Loading invocies content...</p>,
});

export default function InvoicesPage() {
  return (
    <article>
      <p>Invoices page</p>
      <DynamicInvoicesContent />
    </article>
  );
}
