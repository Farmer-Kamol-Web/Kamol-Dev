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
  title: {
    default: "ডাঃ মোঃ আবু কালাম | হৃদরোগ বিশেষজ্ঞ",
    template: "%s | ডাঃ মোঃ আবু কালাম",
  },
  description:
    "ডাঃ মোঃ আবু কালাম — হৃদরোগ ও মেডিসিন বিশেষজ্ঞ। যোগ্যতা, চেম্বারের ঠিকানা, রোগী দেখার সময় এবং সিরিয়ালের জন্য যোগাযোগের তথ্য জানুন।",
  keywords: [
    "ডাঃ মোঃ আবু কালাম",
    "Dr. Md. Abu Kalam",
    "হৃদরোগ বিশেষজ্ঞ",
    "Cardiologist",
    "Medicine Specialist",
    "শেরপুর বগুড়া",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    title: "ডাঃ মোঃ আবু কালাম | হৃদরোগ ও মেডিসিন বিশেষজ্ঞ",
    description:
      "ডাক্তারের যোগ্যতা, চেম্বারের সময়, ঠিকানা এবং সিরিয়ালের তথ্য জানুন।",
    siteName: "Dr. Md. Abu Kalam",
  },
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