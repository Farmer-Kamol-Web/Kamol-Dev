"use client";

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
              <div className="bg-gradient-to-br from-teal-700 to-teal-500 h-48 flex items-center justify-center text-7xl">
                👨‍⚕️
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {t("ডাঃ মোঃ আবু কালাম", "Dr. Md. Abu Kalam")}
                </h2>
                <p className="text-teal-700 font-medium text-sm mb-4">
                  {t("হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", "Cardiologist & Medicine Specialist")}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">{t("বিএমডিসি", "BMDC")}:</span> A-124720
                  </p>
                  <p>
                    <span className="font-medium">{t("বর্তমান পদ", "Current Position")}:</span>
                    <br />
                    {t(
                      "মেডিকেল অফিসার, উপজেলা হেলথ কমপ্লেক্স, ধুনট, বগুড়া",
                      "Medical Officer, Upazila Health Complex, Dhunat, Bogura"
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
                <span className="text-teal-600">🎓</span>
                {t("শিক্ষাগত যোগ্যতা", "Educational Qualifications")}
              </h3>
              <ul className="space-y-3">
                {[
                  { bn: "এমবিবিএস (রংপুর মেডিকেল কলেজ)", en: "MBBS (Rangpur Medical College)" },
                  { bn: "বিসিএস (স্বাস্থ্য)", en: "BCS (Health)" },
                  { bn: "এফসিপিএস (কার্ডিওলজি) — ফাইনাল পার্ট", en: "FCPS (Cardiology) — Final Part" },
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
                <span className="text-teal-600">ℹ️</span>
                {t("সংক্ষিপ্ত পরিচিতি", "Brief Introduction")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t(
                  "ডাঃ মোঃ আবু কালাম একজন অভিজ্ঞ হৃদরোগ ও মেডিসিন বিশেষজ্ঞ। তিনি রাংপুর মেডিকেল কলেজ থেকে এমবিবিএস সম্পন্ন করেছেন এবং বর্তমানে এফসিপিএস (কার্ডিওলজি) ফাইনাল পার্টে অধ্যয়নরত। তিনি ধুনট উপজেলা হেলথ কমপ্লেক্সে মেডিকেল অফিসার হিসেবে কর্মরত আছেন। প্রতি বুধবার শেরপুর, বগুড়ায় শাহ্ সুলতান হসপিটালে রোগী দেখেন।",
                  "Dr. Md. Abu Kalam is an experienced Cardiologist and Medicine Specialist. He completed his MBBS from Rangpur Medical College and is currently pursuing FCPS (Cardiology) Final Part. He is serving as Medical Officer at Dhunat Upazila Health Complex. He sees patients every Wednesday at Shah Sultan Hospital in Sherpur, Bogura."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}