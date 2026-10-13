"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen py-12">
      <div className="container-custom">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("যোগাযোগ করুন", "Contact Us")}
          </h1>
          <p className="text-gray-600">
            {t(
              "যেকোনো প্রয়োজনে নিচের মাধ্যমে যোগাযোগ করুন",
              "Contact us through the following means for any need"
            )}
          </p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              📞
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("ফোন করুন", "Call Us")}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t("সিরিয়াল ও জরুরি যোগাযোগের জন্য", "For serial and emergency contact")}
            </p>
            <div className="space-y-2">
              <a
                href="tel:01709068314"
                className="block text-teal-700 font-bold text-lg hover:underline"
              >
                01709-068314
              </a>
              <a
                href="tel:01709068315"
                className="block text-teal-700 font-bold text-lg hover:underline"
              >
                01709-068315
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              💬
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("WhatsApp", "WhatsApp")}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t("মেসেজ পাঠিয়ে সিরিয়াল নিন", "Send a message to take serial")}
            </p>
            <a
              href="https://wa.me/8801709068314"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              {t("WhatsApp খুলুন", "Open WhatsApp")}
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition md:col-span-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              📍
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("চেম্বারের ঠিকানা", "Chamber Address")}
            </h3>
            <p className="text-gray-700 font-medium mb-1">
              {t(
                "শাহ্ সুলতান হসপিটাল অ্যান্ড ডায়াগনস্টিক সেন্টার",
                "Shah Sultan Hospital & Diagnostic Center"
              )}
            </p>
            <p className="text-gray-600">
              {t("হাসপাতাল রোড, শেরপুর, বগুড়া", "Hospital Road, Sherpur, Bogura")}
            </p>
            <p className="text-teal-700 font-semibold mt-3">
              {t("প্রতি বুধবার • বিকাল ৩টা – রাত ৮টা", "Every Wednesday • 3:00 PM – 8:00 PM")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}