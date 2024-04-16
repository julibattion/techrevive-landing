import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const montserrat = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techrevive",
  description: "Servicio tecnico para notebooks y PC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
