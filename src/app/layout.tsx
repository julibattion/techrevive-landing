import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { title } from "process";

const montserrat = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Techrevive',
  description: 'Servicio tecnico especializado en reparacion de Notebooks, computadoras de escritorio y consolas. Asesoramiento personalizado, rapido y eficaz. Todas las marcas y modelos',
  keywords:'notebooks, computadoras, servicio, tecnico, reparacion, consolas, rapido, arreglar, mantenimiento, lenovo, dell, rosario',
  openGraph: {
    title: 'TechRevive',
    type: 'website',
    description: 'Servicio tecnico especializado en reparacion de Notebooks, computadoras de escritorio y consolas',
  },
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
