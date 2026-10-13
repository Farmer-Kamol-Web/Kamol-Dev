"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-teal-900 text-white mt-16">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}
            </h3>
            <p className="text-teal-200 text-sm leading-relaxed">
              {t(
                "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ। প্রতি বুধবার শেরপুর, বগুড়ায় রোগী দেখেন।",
                "Cardiologist & Medicine Specialist. Sees patients every Wednesday in Sherpur, Bogura."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              {t("দ্রুত লিংক", "Quick Links")}
            </h3>
            <ul className="space-y-2 text-sm text-teal-200">
              <li>
                <Link href="/" className="hover:text-white transition">
                  {t("হোম", "Home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t("আমার সম্পর্কে", "About")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  {t("সার্ভিস", "Services")}
                </Link>
              </li>
              <li>
                <Link href="/chamber" className="hover:text-white transition">
                  {t("চেম্বার", "Chamber")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  {t("যোগাযোগ", "Contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              {t("যোগাযোগ", "Contact")}
            </h3>
            <ul className="space-y-2 text-sm text-teal-200">
              <li>📞 01709-068314</li>
              <li>📞 01709-068315</li>
              <li>
                📍 {t("শেরপুর, বগুড়া", "Sherpur, Bogura")}
              </li>
              <li>
                🕒 {t("বুধবার ৩টা–৮টা", "Wed 3PM–8PM")}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-teal-700 mt-8 pt-6 text-center text-sm text-teal-300">
          <p>
            © {new Date().getFullYear()} {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}.{" "}
            {t("সর্বস্বত্ব সংরক্ষিত।", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
}