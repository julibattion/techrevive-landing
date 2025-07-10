import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TechRevive',
  description:
    'Servicio técnico especializado en reparación de notebooks, computadoras de escritorio y consolas. Asesoramiento personalizado, rápido y eficaz. Todas las marcas y modelos.',
  keywords:
    'notebooks, computadoras, servicio técnico, reparación, consolas, rápido, arreglar, mantenimiento, Lenovo, Dell, Rosario',
  openGraph: {
    title: 'TechRevive',
    type: 'website',
    description:
      'Servicio técnico especializado en reparación de notebooks, computadoras de escritorio y consolas.',
    images: [
      {
        url: '/portada-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Portada TechRevive',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
        <a
          href="https://wa.me/3415024695?text=Hola!%20Quisiera%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 p-2 hover:scale-105 transition-transform"
        >
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              fill
              className="object-contain rounded-full shadow-lg"
              sizes="(max-width: 768px) 56px, 64px"
            />
          </div>
        </a>
      </body>
    </html>
  );
}
