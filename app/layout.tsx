import { ReactNode } from "react";
import { inter } from "./ui/fonts";
import { StoreProvider } from "./store-provider";
import "@/app/ui/global.css";

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
