import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toby's shop — Premium Products for Modern Living",
  description:
    "Discover curated collections of premium electronics, fashion, home goods, and more at Toby's shop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-slate-900 antialiased"}>
        <CartProvider>
          <PromoBanner />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}