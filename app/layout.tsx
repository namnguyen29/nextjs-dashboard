import { ReactNode } from "react";
import { inter } from "./ui/fonts";
import "@/app/ui/global.css";

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
