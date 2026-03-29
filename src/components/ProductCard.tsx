"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Product } from "@/data/products";
import { ShieldCheck, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onSelect, index = 0 }: ProductCardProps) {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative bg-[#242424] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fade-in-up border border-white/10`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onSelect(product)}
    >
      {/* Product image area */}
      <div className="relative h-56 overflow-hidden" style={{ backgroundColor: product.cardBg }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {!imgError ? (
            <Image
              src={product.image}
              alt={product.name[lang]}
              width={160}
              height={200}
              className="object-contain h-44 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 drop-shadow-xl"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Placeholder fallback */
            <div className="relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
              <div
                className="w-24 h-32 rounded-lg shadow-xl relative"
                style={{
                  background: `linear-gradient(135deg, ${product.color}, ${product.color}cc)`,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                  <div className="text-[7px] font-bold tracking-[0.2em] mb-1">NUTRA</div>
                  <div className="text-[5px] tracking-wider opacity-70 mb-2">ESSENTIAL</div>
                  <div className="w-12 h-px bg-white/30" />
                  <div className="text-[5px] mt-2 opacity-60 text-center leading-tight">
                    {product.name[lang].split(" ").slice(0, 2).join(" ")}
                  </div>
                  <div className="text-[5px] opacity-40 mt-1">{product.weight}</div>
                </div>
              </div>
              <div
                className="absolute -bottom-2 left-2 right-2 h-4 rounded-full blur-md opacity-30"
                style={{ backgroundColor: product.color }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* ANVISA badge */}
        {product.anvisaRegistered && (
          <div className="inline-flex items-center gap-1.5 bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-3">
            <ShieldCheck size={12} />
            {t("anvisaBadge")}
          </div>
        )}
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#fb6a10] transition-colors">
          {product.name[lang]}
        </h3>
        <p className="text-white/50 text-sm mb-4 line-clamp-2">
          {product.shortBenefit[lang]}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.category.map((cat) => (
            <span
              key={cat}
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#fb6a10]/10 text-[#fb6a10]"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full flex items-center justify-center gap-2 bg-[#fb6a10] hover:bg-[#fa8a42] text-white font-bold py-3 rounded-xl transition-all duration-300 text-sm">
          <Eye size={16} />
          {t("viewDetails")}
        </button>
      </div>
    </div>
  );
}
