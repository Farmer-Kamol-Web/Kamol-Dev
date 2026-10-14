"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-teal-900 text-white mt-16">
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}
            </h3>
            <p className="text-teal-200 text-sm leading-relaxed">
              {t(
                "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ। প্রতি বুধবার শেরপুর, বগুড়ায় রোগী দেখেন।",
                "Cardiologist & Medicine Specialist. Sees patients every Wednesday in Sherpur, Bogura.",
              )}
            </p>
          </div>

          {/* Quick Links */}
            <div className="min-w-0">
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
            <div className="min-w-0">
            <h3 className="text-lg font-bold mb-3">
              {t("যোগাযোগ", "Contact")}
            </h3>
            <ul className="space-y-3 text-sm text-teal-200">
              <li>
                <a
                  href="tel:01709068314"
                  className="transition hover:text-white hover:underline"
                >
                  01709-068314
                </a>
              </li>
              <li>
                <a
                  href="tel:01709068315"
                  className="transition hover:text-white hover:underline"
                >
                  01709-068315
                </a>
              </li>
              <li>{t("শেরপুর, বগুড়া", "Sherpur, Bogura")}</li>
              <li>{t("বুধবার ৩টা–৮টা", "Wednesday, 3 PM–8 PM")}</li>
              <li>
                <a
                  href="https://wa.me/8801709068314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition hover:text-white hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 11.5a8.4 8.4 0 0 1-12.7 7.2L3 20l1.3-4.1A8.5 8.5 0 1 1 20 11.5Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.5 8.5c.5 2 2 3.5 4 4"
                    />
                  </svg>
                  {t("WhatsApp-এ যোগাযোগ", "Contact on WhatsApp")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-teal-700 mt-8 pt-6 text-center text-sm text-teal-300">
          <p>
            © {currentYear ?? ""} {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}.{" "}
            {t("সর্বস্বত্ব সংরক্ষিত।", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
}
