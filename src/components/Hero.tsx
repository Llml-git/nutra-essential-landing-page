"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;
  const [heroBgError, setHeroBgError] = useState(false);

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#2c2c2c]">
      {/* Background image */}
      {!heroBgError && (
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          onError={() => setHeroBgError(true)}
        />
      )}
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c2c2c] via-[#2c2c2c]/80 to-[#2c2c2c]/40" />
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#fb6a10]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#fa8a42]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fb6a10]/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up">
            <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6 tracking-tight">
              {t("heroTitle").split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb6a10] to-[#f9ae80]">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            <p className="text-white/60 text-lg sm:text-xl max-w-lg mb-8 leading-relaxed">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 bg-[#fb6a10] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-[0_0_30px_rgba(251,106,16,0.4)] hover:scale-105 animate-pulse-glow"
              >
                {t("heroCta")}
                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white/80 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:border-[#fb6a10]/50 hover:text-white"
              >
                {lang === "pt" ? "Saiba Mais" : lang === "en" ? "Learn More" : "Saber Más"}
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "10K+", label: lang === "pt" ? "Atletas" : lang === "en" ? "Athletes" : "Atletas" },
                { value: "4.9★", label: lang === "pt" ? "Avaliação" : lang === "en" ? "Rating" : "Calificación" },
                { value: "100%", label: lang === "pt" ? "Aprovação nos laudos ANVISA" : lang === "en" ? "ANVISA approval on all reports" : "Aprobación en todos los informes ANVISA" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#fb6a10] font-[family-name:var(--font-heading)]">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side - product showcase */}
          <div className="relative hidden lg:flex items-center justify-center animate-fade-in-up animate-delay-200 mt-12">
            <div className="relative w-72 h-72">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#fb6a10]/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-[#fa8a42]/15" />
              {/* Glow behind product */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#fb6a10]/20 to-[#fa8a42]/10" />
              {/* Product image */}
              <div className="absolute inset-6 flex items-center justify-center z-10 ml-5">
                <Image
                  src="/images/products/creatina-pura.png"
                  alt="Creatina Monohidratada 100% Pura"
                  width={200}
                  height={260}
                  className="object-contain drop-shadow-[0_10px_40px_rgba(251,106,16,0.3)] max-h-[220px]"
                  priority
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 right-4 bg-[#2c2c2c] border border-[#fb6a10]/30 rounded-lg px-3 py-2 shadow-xl z-20">
                <div className="text-[#fb6a10] text-xs font-bold">100% Pura</div>
              </div>
              <div className="absolute -bottom-2 -left-6 bg-[#2c2c2c] border border-[#fa8a42]/30 rounded-lg px-3 py-2 shadow-xl z-20">
                <div className="text-[#fa8a42] text-xs font-bold">
                  {lang === "pt" ? "Qualidade Comprovada" : lang === "en" ? "Proven Quality" : "Calidad Comprobada"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
