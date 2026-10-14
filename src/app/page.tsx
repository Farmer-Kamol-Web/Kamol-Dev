
"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";


export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
{/* Hero Section */}
<section
  className="relative overflow-hidden bg-teal-900 text-white py-16 md:py-24"
  style={{
    backgroundImage: "url('/images/hero-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div
    aria-hidden="true"
    className="absolute inset-0 z-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-teal-800/50"
  />

  <div className="container-custom relative z-10">
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


{/* Right - Doctor's Real Photo */}
<div className="flex-shrink-0">
 <div className="relative w-48 h-48 md:w-68 md:h-68 overflow-hidden rounded-full border-4 border-white/70 shadow-xl">
    <Image
      src="/images/doctor-abu-kalam.jpeg"
      alt="ডাঃ মোঃ আবু কালাম — হৃদরোগ ও মেডিসিন বিশেষজ্ঞ"
      fill
      priority
      sizes="(max-width: 768px) 192px, 256px"
      className="object-cover object-top scale-110"
    />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-500 py-16 text-white md:py-24">
  {/* Decorative curved background */}
  <svg
    className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    viewBox="0 0 1440 600"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="heroWave" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#064e3b" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    <path
      d="M0 0H420C300 140 160 180 0 220Z"
      fill="#047857"
      opacity="0.55"
    />
    <path
      d="M0 410C300 570 700 600 1440 390V600H0Z"
      fill="#6ee7b7"
      opacity="0.6"
    />
    <path
      d="M0 465C360 610 820 600 1440 435V600H0Z"
      fill="#a7f3d0"
      opacity="0.5"
    />
    <path
      d="M0 510C420 630 950 610 1440 480V600H0Z"
      fill="url(#heroWave)"
    />
    <g
      fill="none"
      stroke="#d1fae5"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.35"
    >
      <path d="M30 300H95L110 275L130 330L150 240L172 300H215" />
      <path d="M1230 220H1290L1310 195L1330 245L1350 165L1370 220H1430" />
    </g>
    <g
      fill="none"
      stroke="#d1fae5"
      strokeWidth="5"
      strokeLinecap="round"
      opacity="0.45"
    >
      <path d="M1330 75V125M1305 100H1355" />
      <path d="M90 340V380M70 360H110" />
    </g>
  </svg>
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Chamber Time */}
            <div className="group rounded-2xl border border-teal-100 bg-teal-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
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

              <h3 className="mb-2 text-lg font-bold text-teal-950">
                {t("চেম্বারের সময়", "Chamber Time")}
              </h3>
              <p className="mb-1 text-gray-600">
                {t("প্রতি বুধবার", "Every Wednesday")}
              </p>
              <p className="font-semibold text-teal-800">
                {t("বিকাল ৩টা – রাত ৮টা", "3:00 PM – 8:00 PM")}
              </p>
            </div>

            {/* Chamber Address */}
            <div className="group rounded-2xl border border-blue-100 bg-blue-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
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

              <h3 className="mb-2 text-lg font-bold text-blue-950">
                {t("চেম্বারের ঠিকানা", "Chamber Address")}
              </h3>
              <p className="leading-relaxed text-gray-700">
                {t(
                  "শাহ্ সুলতান হসপিটাল অ্যান্ড ডায়াগনস্টিক সেন্টার, হাসপাতাল রোড, শেরপুর, বগুড়া",
                  "Shah Sultan Hospital & Diagnostic Center, Hospital Road, Sherpur, Bogura"
                )}
              </p>
            </div>

            {/* Appointment Numbers */}
            <div className="group rounded-2xl border border-rose-100 bg-rose-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 transition-colors group-hover:bg-rose-700 group-hover:text-white">
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

              <h3 className="mb-2 text-lg font-bold text-rose-950">
                {t("সিরিয়ালের জন্য", "For Appointment")}
              </h3>
              <p className="mb-3 text-gray-600">
                {t("ফোন করে সিরিয়াল নিন", "Call to book an appointment")}
              </p>

              <div className="space-y-2">
                <a
                  href="tel:01709068314"
                  className="block font-semibold text-rose-800 transition hover:text-rose-950 hover:underline"
                >
                  01709-068314
                </a>
                <a
                  href="tel:01709068315"
                  className="block font-semibold text-rose-800 transition hover:text-rose-950 hover:underline"
                >
                  01709-068315
                </a>
              </div>
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