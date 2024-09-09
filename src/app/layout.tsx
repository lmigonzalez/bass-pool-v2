import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miami Pool Builders | Custom Pool Designs - Bass Pool Group",
  description:
    "Transform your backyard into a luxurious oasis with Miami's premier pool builders at Bass Pool Group. Specializing in custom poolscapes that blend seamlessly with your lifestyle and home aesthetics. Experience exceptional craftsmanship, personalized service, and innovative pool solutions. Contact us today for a bespoke design consultation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
