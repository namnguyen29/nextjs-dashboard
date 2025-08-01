import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";

export const metadata: Metadata = {
  title: "Dashboard | Acme Dashboard",
};

export default function Page() {
  return (
    <>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardWrapper />}>
          <CardWrapper />
        </Suspense>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </section>
    </>
  );
}
