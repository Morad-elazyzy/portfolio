import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components//Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["latin"],
});

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
      <body className={poppins.className}>
        <Navbar />
        <main className="min-h-screen  sm:py-14 py-28 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
