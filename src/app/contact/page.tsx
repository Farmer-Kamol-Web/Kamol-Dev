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
              "Contact us through the following means for any need",
            )}
          </p>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-lg transition">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("ফোন করুন", "Call Us")}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t(
                "সিরিয়াল ও জরুরি যোগাযোগের জন্য",
                "For serial and emergency contact",
              )}
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
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7"
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
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {t("চেম্বারের ঠিকানা", "Chamber Address")}
            </h3>
            <p className="text-gray-700 font-medium mb-1">
              {t(
                "শাহ্ সুলতান হসপিটাল অ্যান্ড ডায়াগনস্টিক সেন্টার",
                "Shah Sultan Hospital & Diagnostic Center",
              )}
            </p>
            <p className="text-gray-600">
              {t(
                "হাসপাতাল রোড, শেরপুর, বগুড়া",
                "Hospital Road, Sherpur, Bogura",
              )}
            </p>
            <p className="text-teal-700 font-semibold mt-3">
              {t(
                "প্রতি বুধবার • বিকাল ৩টা – রাত ৮টা",
                "Every Wednesday • 3:00 PM – 8:00 PM",
              )}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
