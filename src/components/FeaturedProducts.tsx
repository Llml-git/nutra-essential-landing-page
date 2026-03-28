"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { products, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function FeaturedProducts() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-[#2c2c2c] mb-3 tracking-tight">
            {t("featuredTitle")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fb6a10] to-[#fa8a42] mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
              index={i}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
