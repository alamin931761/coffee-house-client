import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
  title: "Coffee House",
  description:
    "Welcome to Coffee House - Your go-to place for all things coffee!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <div className="min-h-screen pt-16">{children}</div>
        <Footer />

        {/* Toaster component for displaying notifications  */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
