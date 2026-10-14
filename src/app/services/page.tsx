"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: "❤️",
      titleBn: "হৃদরোগ পরীক্ষা ও চিকিৎসা",
      titleEn: "Heart Disease Checkup & Treatment",
      descBn:
        "বুক ব্যথা, ধড়ফড়ানি, উচ্চ রক্তচাপসহ হৃদরোগ সংক্রান্ত সকল সমস্যার পরামর্শ ও চিকিৎসা।",
      descEn:
        "Consultation and treatment for chest pain, palpitation, high blood pressure and all heart related problems.",
    },
    {
      icon: "🩺",
      titleBn: "মেডিসিন কনসালটেশন",
      titleEn: "Medicine Consultation",
      descBn:
        "সাধারণ ও জটিল মেডিসিন সংক্রান্ত রোগের পরামর্শ ও চিকিৎসা পরিকল্পনা।",
      descEn:
        "Advice and treatment planning for general and complex medical conditions.",
    },
    {
      icon: "📡",
      titleBn: "আল্ট্রাসাউন্ড (CMU)",
      titleEn: "Ultrasound (CMU)",
      descBn: "প্রয়োজন অনুযায়ী আল্ট্রাসাউন্ড পরীক্ষার পরামর্শ ও মূল্যায়ন।",
      descEn: "Advice and evaluation of ultrasound examinations as required.",
    },
    {
      icon: "💊",
      titleBn: "প্রেসক্রিপশন ও ফলোআপ",
      titleEn: "Prescription & Follow-up",
      descBn:
        "সঠিক ওষুধ নির্ধারণ এবং নিয়মিত ফলোআপের মাধ্যমে চিকিৎসা নিশ্চিতকরণ।",
      descEn:
        "Accurate prescription and regular follow-up to ensure proper treatment.",
    },
    {
      icon: "🏥",
      titleBn: "রোগ নির্ণয় ও পরামর্শ",
      titleEn: "Diagnosis & Counseling",
      descBn:
        "রোগীর লক্ষণ অনুযায়ী সঠিক রোগ নির্ণয় এবং জীবনযাত্রা বিষয়ক পরামর্শ।",
      descEn: "Accurate diagnosis based on symptoms and lifestyle counseling.",
    },
    {
      icon: "📋",
      titleBn: "স্বাস্থ্য পরীক্ষা পরামর্শ",
      titleEn: "Health Checkup Advice",
      descBn:
        "কোন পরীক্ষা করাতে হবে এবং কখন করাতে হবে সে বিষয়ে বিস্তারিত পরামর্শ।",
      descEn: "Detailed advice on which tests are needed and when to do them.",
    },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container-custom">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("আমার সার্ভিসসমূহ", "My Services")}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "হৃদরোগ ও মেডিসিন বিষয়ক সম্পূর্ণ পরামর্শ ও চিকিৎসা সেবা",
              "Complete consultation and treatment services for heart disease and medicine",
            )}
          </p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-teal-200 transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t(service.titleBn, service.titleEn)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(service.descBn, service.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
