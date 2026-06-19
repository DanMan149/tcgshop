import type { Metadata } from "next";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrintedTCG Labs — 3D Printed TCG Accessories",
  description:
    "Premium 3D printed TCG accessories: display stands, ETB cases, slab bumpers, and mailers. Printed on-demand in Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
