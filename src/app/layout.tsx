import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { PedidosProvider } from "./context/PedidosContent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sabores del Caribe",
  description:
    "Un restaurante que ofrece una mezcla auténtica de sabores caribeños con ingredientes frescos y recetas tradicionales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es , en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <NavBar />
        </header>
        <PedidosProvider>{children}</PedidosProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
