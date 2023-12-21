import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morad elazyzy Portfolio ",
  description: "front end developer & ux/ui designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen relative"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
