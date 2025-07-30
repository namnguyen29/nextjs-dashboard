import { ReactNode } from "react";
import { Metadata } from "next";
import { inter } from "./ui/fonts";
import { StoreProvider } from "./store-provider";
import "@/app/ui/global.css";

type Props = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
