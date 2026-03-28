"use client";

import Link from "next/link";
import Image from "next/image";
import BrandLogo from "./BrandLogo";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <footer id="contact" className="bg-[#2c2c2c] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4 group">
              <BrandLogo size={52} />
              <Image
                src="/images/logos/logo-text-dark-bg.png"
                alt="Nutra Essential"
                width={180}
                height={46}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed">
              {lang === "pt"
                ? "Suplementos de alta performance para quem busca resultados reais."
                : lang === "en"
                ? "High-performance supplements for those seeking real results."
                : "Suplementos de alto rendimiento para quienes buscan resultados reales."}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-[family-name:var(--font-heading)] text-lg mb-4 tracking-wide">
              {t("footerProducts")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-[#fb6a10] transition-colors">Creatina Pura</Link></li>
              <li><Link href="/products" className="hover:text-[#fb6a10] transition-colors">Creabolic</Link></li>
              <li><Link href="/products" className="hover:text-[#fb6a10] transition-colors">Pré-Treino</Link></li>
              <li><Link href="/products" className="hover:text-[#fb6a10] transition-colors">Cimevitan Testo</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-[family-name:var(--font-heading)] text-lg mb-4 tracking-wide">
              {t("footerCompany")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-[#fb6a10] transition-colors">{t("footerAbout")}</a></li>
              <li><a href="#" className="hover:text-[#fb6a10] transition-colors">{t("footerFaq")}</a></li>
              <li><a href="#" className="hover:text-[#fb6a10] transition-colors">{t("footerPrivacy")}</a></li>
              <li><a href="#" className="hover:text-[#fb6a10] transition-colors">{t("footerTerms")}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-[family-name:var(--font-heading)] text-lg mb-4 tracking-wide">
              {t("footerSupport")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contato@nutraessential.com.br" className="hover:text-[#fb6a10] transition-colors">contato@nutraessential.com.br</a></li>
              <li><a href="#" className="hover:text-[#fb6a10] transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-[#fb6a10] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Nutra Essential. {t("footerRights")}
          </p>
          <p className="text-xs text-white/40">
            CNPJ: 00.000.000/0001-00 &middot; {lang === "pt" ? "Todos os produtos registrados na ANVISA" : lang === "en" ? "All products ANVISA registered" : "Todos los productos registrados en ANVISA"}
          </p>
        </div>
      </div>
    </footer>
  );
}
