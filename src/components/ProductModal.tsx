"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { Product } from "@/data/products";
import {
  X,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Beaker,
  Sparkles,
  BookOpen,
  Palette,
  ClipboardList,
} from "lucide-react";
import PlatformIcon from "./PlatformIcon";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;
  const [imgError, setImgError] = useState(false);

  // Reset image error state when product changes
  useEffect(() => {
    setImgError(false);
  }, [product?.id]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#2c2c2c]/80 hover:bg-[#fb6a10] text-white flex items-center justify-center transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div
          className="relative p-8 pb-12"
          style={{ backgroundColor: product.cardBg }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Product visual */}
            <div className="flex-shrink-0">
              {!imgError ? (
                <Image
                  src={product.image}
                  alt={product.name[lang]}
                  width={112}
                  height={144}
                  className="object-contain w-28 h-36 drop-shadow-2xl rounded-xl"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  className="w-28 h-36 rounded-xl shadow-2xl relative"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}, ${product.color}cc)`,
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3">
                    <div className="text-[8px] font-bold tracking-[0.2em] mb-1">NUTRA</div>
                    <div className="text-[6px] tracking-wider opacity-70 mb-2">ESSENTIAL</div>
                    <div className="w-14 h-px bg-white/30" />
                    <div className="text-[6px] mt-2 opacity-60 text-center leading-tight">
                      {product.name[lang].split(" ").slice(0, 2).join(" ")}
                    </div>
                    <div className="text-[6px] opacity-40 mt-1">{product.weight}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Title area */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {product.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#fb6a10]/10 text-[#fb6a10]"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#2c2c2c] mb-3 leading-tight">
                {product.name[lang]}
              </h2>
              {product.anvisaRegistered && (
                <div className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  <ShieldCheck size={14} />
                  {t("anvisaBadge")}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <p className="text-[#2c2c2c]/70 text-base leading-relaxed">
            {product.description[lang]}
          </p>

          {/* Flavors (only if product has them) */}
          {product.flavors && (
            <div>
              <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#2c2c2c] mb-4">
                <Palette size={20} className="text-[#fb6a10]" />
                {t("modalFlavors")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.flavors[lang].map((flavor) => (
                  <span
                    key={flavor}
                    className="bg-[#fb6a10]/10 text-[#fb6a10] text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          <div>
            <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#2c2c2c] mb-4">
              <Sparkles size={20} className="text-[#fb6a10]" />
              {t("modalBenefits")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.benefits[lang].map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#2c2c2c]/70">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#2c2c2c] mb-4">
              <Beaker size={20} className="text-[#fb6a10]" />
              {t("modalIngredients")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="bg-gray-100 text-[#2c2c2c]/70 text-sm px-3 py-1.5 rounded-lg"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Usage */}
          <div>
            <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#2c2c2c] mb-4">
              <BookOpen size={20} className="text-[#fb6a10]" />
              {t("modalUsage")}
            </h3>
            <p className="text-sm text-[#2c2c2c]/70 bg-[#fb6a10]/5 border border-[#fb6a10]/10 rounded-xl p-4">
              {product.usage[lang]}
            </p>
          </div>

          {/* Warnings */}
          <div>
            <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#2c2c2c] mb-4">
              <AlertTriangle size={20} className="text-amber-500" />
              {t("modalWarnings")}
            </h3>
            <p className="text-sm text-[#2c2c2c]/60 bg-amber-50 border border-amber-200 rounded-xl p-4">
              {product.warnings[lang]}
            </p>
          </div>

          {/* Nutritional Info */}
          {product.nutritionalInfo && (
            <div>
              <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#2c2c2c] mb-4">
                <ClipboardList size={20} className="text-[#fb6a10]" />
                {t("modalNutrition")}
              </h3>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Header info */}
                <div className="bg-gray-50 px-4 py-3 text-sm text-[#2c2c2c]/70 space-y-1">
                  <p><span className="font-semibold">{t("modalNutritionServings")}:</span> {product.nutritionalInfo.servingsPerContainer}</p>
                  <p><span className="font-semibold">{t("modalNutritionServing")}:</span> {product.nutritionalInfo.servingSize}</p>
                </div>
                {/* Table */}
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#2c2c2c] text-white">
                      <th className="text-left px-4 py-2 font-semibold">{t("modalNutritionNutrient")}</th>
                      <th className="text-right px-4 py-2 font-semibold">{t("modalNutritionAmount")}</th>
                      <th className="text-right px-4 py-2 font-semibold w-20">{t("modalNutritionVd")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.nutritionalInfo.rows.map((row, i) => (
                      <tr key={row.nutrient} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-2 text-[#2c2c2c]/70">{row.nutrient}</td>
                        <td className="px-4 py-2 text-right text-[#2c2c2c]/70 font-medium">{row.amount}</td>
                        <td className="px-4 py-2 text-right text-[#2c2c2c]/50">{row.vd || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Note */}
                {product.nutritionalInfo.note && (
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                    <p className="text-xs text-[#2c2c2c]/50">{product.nutritionalInfo.note}</p>
                    <p className="text-xs text-[#2c2c2c]/40 mt-1">{t("modalNutritionFootnote")}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Buy Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#2c2c2c] mb-4">
              {t("modalBuyNow")}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {product.buyLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-3 bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#fb6a10]/30 text-[#2c2c2c] text-sm font-medium py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <PlatformIcon platform={link.platform} size={link.platform === "Magalu" ? 48 : 36} className="transition-transform group-hover/btn:scale-110" />
                  <span className="font-medium">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
