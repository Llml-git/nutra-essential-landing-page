"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Star, Quote } from "lucide-react";

export default function SocialProof() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;

  const stats = [
    { value: "10K+", label: t("proofAthletes") },
    { value: "50K+", label: t("proofProducts") },
    { value: "2.500+", label: t("proofStores") },
    { value: "4.9/5", label: t("proofRating") },
  ];

  const testimonials = [
    {
      text: t("testimonial1"),
      author: "Carlos M.",
      role: lang === "pt" ? "Atleta de CrossFit" : lang === "en" ? "CrossFit Athlete" : "Atleta de CrossFit",
    },
    {
      text: t("testimonial2"),
      author: "Prof. Renata S.",
      role: lang === "pt" ? "Personal Trainer" : "Personal Trainer",
    },
  ];

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#fb6a10]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fa8a42]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
            {t("proofTitle")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fb6a10] to-[#fa8a42] mx-auto rounded-full" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#fb6a10]/30 transition-all">
              <div className="text-4xl sm:text-5xl font-bold text-[#fb6a10] font-[family-name:var(--font-heading)] mb-2">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test) => (
            <div key={test.author} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#fb6a10]/20 transition-all">
              <Quote size={24} className="text-[#fb6a10]/40 mb-4" />
              <p className="text-white/70 text-lg leading-relaxed mb-6 italic">
                &ldquo;{test.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fb6a10] to-[#fa8a42] flex items-center justify-center text-white font-bold text-sm">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{test.author}</div>
                  <div className="text-white/40 text-xs">{test.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#fb6a10] fill-[#fb6a10]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
