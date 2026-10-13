import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ডাঃ মোঃ আবু কালাম | Dr. Md. Abu Kalam",
  description: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ | Cardiologist & Medicine Specialist",
};

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${inter.variable} ${notoBengali.variable} antialiased`}>
<LanguageProvider>
  <Navbar />
  <main className="min-h-[70vh]">{children}</main>
  <Footer />
  <WhatsAppButton />
</LanguageProvider>
      </body>
    </html>
  );
}