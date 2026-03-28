"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#fb6a10]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c2c2c] mb-6 tracking-tight leading-tight">
          {t("ctaTitle")}
        </h2>
        <p className="text-[#2c2c2c]/60 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          {t("ctaSubtitle")}
        </p>
        <Link
          href="/products"
          className="group inline-flex items-center gap-3 bg-[#fb6a10] text-white font-bold px-10 py-5 rounded-xl text-xl transition-all hover:shadow-[0_0_40px_rgba(251,106,16,0.4)] hover:scale-105"
        >
          {t("ctaButton")}
          <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
