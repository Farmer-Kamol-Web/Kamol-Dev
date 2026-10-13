"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-teal-200 font-medium mb-2">
                {t("হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", "Cardiologist & Medicine Specialist")}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}
              </h1>
              <p className="text-teal-100 text-lg mb-6 max-w-xl">
                {t(
                  "এমবিবিএস (আরএমসি), বিসিএস (স্বাস্থ্য), এফসিপিএস (কার্ডিওলজি) ফাইনাল পার্ট",
                  "MBBS (RMC), BCS (Health), FCPS (Cardiology) Final Part"
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:01709068314"
                  className="bg-white text-teal-800 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition text-center"
                >
                  {t("সিরিয়াল নিন", "Book Serial")}
                </a>
                <Link
                  href="/chamber"
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition text-center"
                >
                  {t("চেম্বার দেখুন", "View Chamber")}
                </Link>
              </div>
            </div>

            {/* Right - Doctor Image Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-6xl">
                👨‍⚕️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chamber Time */}
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <div className="text-3xl mb-3">🕒</div>
              <h3 className="font-bold text-teal-900 mb-1">
                {t("চেম্বারের সময়", "Chamber Time")}
              </h3>
              <p className="text-gray-700">
                {t("প্রতি বুধবার", "Every Wednesday")}
              </p>
              <p className="text-teal-700 font-semibold">
                {t("বিকাল ৩টা – রাত ৮টা", "3:00 PM – 8:00 PM")}
              </p>
            </div>

            {/* Location */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-blue-900 mb-1">
                {t("চেম্বারের ঠিকানা", "Chamber Address")}
              </h3>
              <p className="text-gray-700">
                {t(
                  "শাহ্ সুলতান হসপিটাল, শেরপুর, বগুড়া",
                  "Shah Sultan Hospital, Sherpur, Bogura"
                )}
              </p>
            </div>

            {/* Serial */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-red-900 mb-1">
                {t("সিরিয়ালের জন্য", "For Serial")}
              </h3>
              <p className="text-gray-700 font-medium">01709-068314</p>
              <p className="text-gray-700 font-medium">01709-068315</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {t("যোগ্যতা ও অভিজ্ঞতা", "Qualifications & Experience")}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "MBBS (RMC)",
              "BCS (Health)",
              "FCPS (Cardiology) Final Part",
              "PGT (Medicine)",
              "CMU (Ultra)",
            ].map((item) => (
              <span
                key={item}
                className="bg-white border border-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}