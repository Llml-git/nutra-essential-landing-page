"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import PlatformIcon from "./PlatformIcon";

const channels = [
  { name: "Bandshop", url: "https://www.bandshop.com.br/" },
  { name: "Amazon", url: "https://www.amazon.com.br/" },
  { name: "Mercado Livre", url: "https://www.mercadolivre.com.br/" },
  { name: "Shopee", url: "https://shopee.com.br/" },
  { name: "Ultrafarma", url: "https://www.ultrafarma.com.br/" },
  { name: "Magalu", url: "https://www.magazineluiza.com.br/" },
  { name: "TikTok Shop", url: "https://seller-br.tiktok.com/" },
];

export default function SalesChannels() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
            {t("salesTitle")}
          </h2>
          <p className="text-white/50 text-lg">{t("salesSubtitle")}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fb6a10] to-[#fa8a42] mx-auto rounded-full mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#fb6a10]/30 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <PlatformIcon
                platform={ch.name}
                size={ch.name === "Magalu" ? 48 : 36}
                className="transition-transform group-hover:scale-110"
              />
              <span className="font-medium text-white text-sm">{ch.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
