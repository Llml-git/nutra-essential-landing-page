"use client";

import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { Filter, Search, X } from "lucide-react";

type FilterCategory = "all" | "energy" | "muscle" | "performance";

function ProductsContent() {
  const { lang } = useLang();
  const t = (key: string) => translations[key]?.[lang] ?? key;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Open modal from query param (e.g. ?product=creatina-pura)
  useEffect(() => {
    const productId = searchParams.get("product");
    if (productId) {
      const found = products.find((p) => p.id === productId);
      if (found) setSelectedProduct(found);
    }
  }, [searchParams]);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "energy", label: t("filterEnergy") },
    { key: "muscle", label: t("filterMuscle") },
    { key: "performance", label: t("filterPerformance") },
  ];

  const filtered = products.filter((p) => {
    const matchesCategory = filter === "all" || p.category.includes(filter);
    if (!search.trim()) return matchesCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      p.name[lang].toLowerCase().includes(q) ||
      p.shortBenefit[lang].toLowerCase().includes(q) ||
      p.description[lang].toLowerCase().includes(q) ||
      p.ingredients.some((ing) => ing.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-brand-cream">
      {/* Page header */}
      <div className="relative bg-[#2c2c2c] pt-32 pb-24 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero/products-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-50"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c2c2c]/30 via-[#2c2c2c]/50 to-[#2c2c2c]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {t("productsPageTitle")}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fb6a10] to-[#fa8a42] mx-auto rounded-full mb-8" />

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                lang === "pt"
                  ? "Buscar por nome, ingrediente..."
                  : lang === "en"
                  ? "Search by name, ingredient..."
                  : "Buscar por nombre, ingrediente..."
              }
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#fb6a10]/50 focus:bg-white/15 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter size={18} className="text-white/40" />
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === f.key
                    ? "bg-gradient-to-r from-[#fb6a10] to-[#fa8a42] text-white shadow-lg shadow-[#fb6a10]/30"
                    : "bg-white/10 text-white/60 hover:text-white hover:bg-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
              index={i}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#2c2c2c]/40">
            <p className="text-xl font-[family-name:var(--font-heading)]">
              {lang === "pt"
                ? "Nenhum produto encontrado."
                : lang === "en"
                ? "No products found."
                : "No se encontraron productos."}
            </p>
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          if (searchParams.get("product")) {
            router.replace("/products", { scroll: false });
          }
        }}
      />
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
