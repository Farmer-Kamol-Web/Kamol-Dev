"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen py-12">
      <div className="container-custom">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("আমার সম্পর্কে", "About Me")}
          </h1>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left - Photo + Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-teal-700 to-teal-500">
                <Image
                  src="/images/doctor-abu-kalam.jpeg"
                  alt="ডাঃ মোঃ আবু কালাম — হৃদরোগ ও মেডিসিন বিশেষজ্ঞ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}
                </h2>
                <p className="text-teal-700 font-medium text-sm mb-4">
                  {t(
                    "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ",
                    "Cardiologist & Medicine Specialist",
                  )}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">
                      {t("বিএমডিসি", "BMDC")}:
                    </span>{" "}
                    A-124720
                  </p>
                  <p>
                    <span className="font-medium">
                      {t("বর্তমান পদ", "Current Position")}:
                    </span>
                    <br />
                    {t(
                      "মেডিকেল অফিসার, উপজেলা হেলথ কমপ্লেক্স, ধুনট, বগুড়া",
                      "Medical Officer, Upazila Health Complex, Dhunat, Bogura",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Qualifications */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
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
                      d="M12 3 2.5 8 12 13l9.5-5L12 3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.5 10.1v5.2c3.4 2.4 7.6 2.4 11 0v-5.2M21.5 8v6"
                    />
                  </svg>
                </span>
                {t("শিক্ষাগত যোগ্যতা", "Educational Qualifications")}
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    bn: "এমবিবিএস (রংপুর মেডিকেল কলেজ)",
                    en: "MBBS (Rangpur Medical College)",
                  },
                  { bn: "বিসিএস (স্বাস্থ্য)", en: "BCS (Health)" },
                  {
                    bn: "এফসিপিএস (কার্ডিওলজি) — ফাইনাল পার্ট",
                    en: "FCPS (Cardiology) — Final Part",
                  },
                  { bn: "পিজিটি (মেডিসিন)", en: "PGT (Medicine)" },
                  { bn: "সিএমইউ (আল্ট্রাসাউন্ড)", en: "CMU (Ultrasound)" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{t(item.bn, item.en)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Text */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11v5m0-8h.01"
                    />
                  </svg>
                </span>
                {t("সংক্ষিপ্ত পরিচিতি", "Brief Introduction")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t(
                  "ডাঃ মোঃ আবু কালাম একজন অভিজ্ঞ হৃদরোগ ও মেডিসিন বিশেষজ্ঞ। তিনি রাংপুর মেডিকেল কলেজ থেকে এমবিবিএস সম্পন্ন করেছেন এবং বর্তমানে এফসিপিএস (কার্ডিওলজি) ফাইনাল পার্টে অধ্যয়নরত। তিনি ধুনট উপজেলা হেলথ কমপ্লেক্সে মেডিকেল অফিসার হিসেবে কর্মরত আছেন। প্রতি বুধবার শেরপুর, বগুড়ায় শাহ্ সুলতান হসপিটালে রোগী দেখেন।",
                  "Dr. Md. Abu Kalam is an experienced Cardiologist and Medicine Specialist. He completed his MBBS from Rangpur Medical College and is currently pursuing FCPS (Cardiology) Final Part. He is serving as Medical Officer at Dhunat Upazila Health Complex. He sees patients every Wednesday at Shah Sultan Hospital in Sherpur, Bogura.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
