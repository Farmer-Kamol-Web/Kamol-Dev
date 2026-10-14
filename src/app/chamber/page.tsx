"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ChamberPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen py-12">
      <div className="container-custom">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("চেম্বার ও অ্যাপয়েন্টমেন্ট", "Chamber & Appointment")}
          </h1>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chamber Info Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-teal-700 text-white px-6 py-4">
              <h2 className="text-xl font-bold">
                {t("চেম্বারের তথ্য", "Chamber Information")}
              </h2>
            </div>
            <div className="p-6 space-y-5">
              {/* Hospital Name */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7h2m2 0h2M9 11h2m2 0h2M10 21v-5h4v5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    {t("হাসপাতাল", "Hospital")}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {t(
                      "শাহ্ সুলতান হসপিটাল অ্যান্ড ডায়াগনস্টিক সেন্টার",
                      "Shah Sultan Hospital & Diagnostic Center",
                    )}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
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
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    {t("ঠিকানা", "Address")}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {t(
                      "হাসপাতাল রোড, শেরপুর, বগুড়া",
                      "Hospital Road, Sherpur, Bogura",
                    )}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7v5l3 2"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    {t("সময়সূচি", "Schedule")}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {t("প্রতি বুধবার", "Every Wednesday")}
                  </p>
                  <p className="text-teal-700 font-bold text-lg">
                    {t("বিকাল ৩টা – রাত ৮টা", "3:00 PM – 8:00 PM")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Serial / Contact Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-4">
              <h2 className="text-xl font-bold">
                {t("সিরিয়াল নিন", "Take Serial")}
              </h2>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-gray-600">
                {t(
                  "সিরিয়ালের জন্য নিচের নাম্বারে কল করুন অথবা WhatsApp করুন।",
                  "Call or WhatsApp the numbers below to take a serial.",
                )}
              </p>

              {/* Phone Numbers */}
              <div className="space-y-3">
                <a
                  href="tel:01709068314"
                  className="flex items-center gap-3 bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-xl px-5 py-4 transition"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
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
                        d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">
                      {t("সিরিয়াল নাম্বার ১", "Serial Number 1")}
                    </p>
                    <p className="font-bold text-lg text-gray-900">
                      01709-068314
                    </p>
                  </div>
                </a>

                <a
                  href="tel:01709068315"
                  className="flex items-center gap-3 bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-xl px-5 py-4 transition"
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-500">
                      {t("সিরিয়াল নাম্বার ২", "Serial Number 2")}
                    </p>
                    <p className="font-bold text-lg text-gray-900">
                      01709-068315
                    </p>
                  </div>
                </a>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/8801709068314"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition"
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
                {t("WhatsApp-এ সিরিয়াল নিন", "Take Serial on WhatsApp")}
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
          <p className="text-amber-800 text-sm">
            {t(
              "নোট: সিরিয়ালের জন্য আগে থেকে যোগাযোগ করা বাঞ্ছনীয়। চেম্বার শুধুমাত্র বুধবার খোলা থাকে।",
              "Note: It is advisable to contact in advance for serial. Chamber is open only on Wednesdays.",
            )}
          </p>
        </div>
      </div>
    </main>
  );
}
