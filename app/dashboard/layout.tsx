import SideNav from "@/app/ui/dashboard/sidenav";
import { ReactNode } from "react";

export default function Layout({ children }: { readonly children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <nav className="w-full flex-none md:w-64">
        <SideNav />
      </nav>

      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
