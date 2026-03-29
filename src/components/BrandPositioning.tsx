"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Zap, Target, RotateCcw, ShieldCheck } from "lucide-react";

export default function BrandPositioning() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;

  const pillars = [
    { icon: Zap, title: t("brandEnergy"), desc: t("brandEnergyDesc"), color: "#fb6a10" },
    { icon: Target, title: t("brandPerformance"), desc: t("brandPerformanceDesc"), color: "#fa8a42" },
    { icon: RotateCcw, title: t("brandRecovery"), desc: t("brandRecoveryDesc"), color: "#f9ae80" },
  ];

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background product image — right side */}
      <div className="hidden lg:block absolute -right-16 top-0 bottom-0 w-[65%] pointer-events-none">
        <Image
          src="/images/hero/brand-product.png"
          alt=""
          fill
          quality={100}
          className="object-cover object-center"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* Vignette fade around the image — center offset to the right */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 75% 50%, transparent 30%, black 100%)" }} />
        {/* Fade left edge into background */}
        <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-black to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:max-w-[55%]">
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              {t("brandTitle")}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fb6a10] to-[#fa8a42] rounded-full" />
          </div>

          {/* Pillar cards — stacked vertically */}
          <div className="flex flex-col gap-6 mb-12">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animate-delay-${(i + 1) * 100}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${p.color}15` }}
                  >
                    <p.icon size={28} style={{ color: p.color }} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2 tracking-wide">
                      {p.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">{p.desc}</p>
                  </div>
                </div>
                {/* Left accent */}
                <div
                  className="absolute top-0 bottom-0 left-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: p.color }}
                />
              </div>
            ))}
          </div>

          {/* Credibility bar */}
          <div className="bg-[#2c2c2c] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-[#fb6a10]/10 flex items-center justify-center">
                <ShieldCheck size={28} className="text-[#fb6a10]" />
              </div>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              {t("brandCredibility")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
