import type { Metadata, Viewport } from "next";
import { Ma_Shan_Zheng, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const mashan = Ma_Shan_Zheng({ weight: "400", subsets: ["latin"], variable: "--font-mashan" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Wok & Roll | Chinese Food Stall",
  description: "Wok-fresh noodles, momos and fried rice, ready in 10 minutes.",
};

export const viewport: Viewport = { themeColor: "#c8102e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mashan.variable} ${poppins.variable}`}>
      <body className="min-h-dvh antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 pb-24 md:pb-8">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
