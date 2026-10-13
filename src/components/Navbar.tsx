"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", bn: "হোম", en: "Home" },
    { href: "/about", bn: "আমার সম্পর্কে", en: "About" },
    { href: "/services", bn: "সার্ভিস", en: "Services" },
    { href: "/chamber", bn: "চেম্বার", en: "Chamber" },
    { href: "/contact", bn: "যোগাযোগ", en: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
              ডা
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-teal-800 text-sm leading-tight">
                {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}
              </p>
              <p className="text-xs text-gray-500">
                {t("হৃদরোগ বিশেষজ্ঞ", "Cardiologist")}
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-teal-700 font-medium text-sm transition"
              >
                {t(item.bn, item.en)}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage("bn")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  language === "bn"
                    ? "bg-teal-700 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                বাং
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  language === "en"
                    ? "bg-teal-700 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-teal-50 hover:text-teal-700"
              >
                {t(item.bn, item.en)}
              </Link>
            ))}

            <div className="flex gap-2 px-3 pt-2">
              <button
                onClick={() => setLanguage("bn")}
                className={`flex-1 py-2 rounded-md text-sm font-medium ${
                  language === "bn"
                    ? "bg-teal-700 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 py-2 rounded-md text-sm font-medium ${
                  language === "en"
                    ? "bg-teal-700 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                English
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}