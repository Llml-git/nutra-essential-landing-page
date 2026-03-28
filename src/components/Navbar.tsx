"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { useLang } from "@/context/LanguageContext";
import { translations, Lang } from "@/data/translations";
import { products } from "@/data/products";

const langLabels: Record<Lang, string> = { pt: "PT", en: "EN", es: "ES" };

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const t = (key: string) => translations[key]?.[lang] ?? key;

  const suggestions = searchQuery.trim()
    ? products.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name[lang].toLowerCase().includes(q) ||
          p.shortBenefit[lang].toLowerCase().includes(q) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(q))
        );
      })
    : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelectProduct(productId: string) {
    setSearchQuery("");
    setSearchOpen(false);
    setMenuOpen(false);
    router.push(`/products?product=${productId}`);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c2c2c]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <BrandLogo size={52} />
            <Image
              src="/images/logos/logo-text-dark-bg.png"
              alt="Nutra Essential"
              width={180}
              height={46}
              className="object-contain hidden sm:block"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#top" className="text-white/80 hover:text-[#fb6a10] transition-colors text-sm font-medium tracking-wide">
              {t("navHome")}
            </a>
            <Link href="/products" className="text-white/80 hover:text-[#fb6a10] transition-colors text-sm font-medium tracking-wide">
              {t("navProducts")}
            </Link>
            <a href="/#about" className="text-white/80 hover:text-[#fb6a10] transition-colors text-sm font-medium tracking-wide">
              {t("navAbout")}
            </a>
            <a href="#contact" className="text-white/80 hover:text-[#fb6a10] transition-colors text-sm font-medium tracking-wide">
              {t("navContact")}
            </a>

            {/* Desktop search */}
            <div ref={searchRef} className="relative">
              <div className="flex items-center bg-white/10 rounded-lg overflow-hidden border border-white/10 focus-within:border-[#fb6a10]/50 transition-all">
                <Search size={14} className="ml-3 text-white/30" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  placeholder={
                    lang === "pt" ? "Buscar produto..." : lang === "en" ? "Search product..." : "Buscar producto..."
                  }
                  className="w-40 lg:w-48 bg-transparent text-white text-xs placeholder-white/30 px-2 py-2 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
                    className="mr-2 text-white/40 hover:text-white transition-colors"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* Suggestions dropdown */}
              {searchOpen && suggestions.length > 0 && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-[#2c2c2c] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                  {suggestions.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectProduct(p.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors"
                    >
                      <div
                        className="w-8 h-10 rounded flex-shrink-0 flex items-center justify-center text-white text-[5px] font-bold"
                        style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}
                      >
                        NE
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-sm font-medium truncate">{p.name[lang]}</div>
                        <div className="text-white/40 text-xs truncate">{p.shortBenefit[lang]}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchOpen && searchQuery.trim() && suggestions.length === 0 && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-[#2c2c2c] border border-white/10 rounded-xl shadow-2xl p-4 z-50">
                  <p className="text-white/40 text-sm text-center">
                    {lang === "pt" ? "Nenhum produto encontrado" : lang === "en" ? "No products found" : "No se encontraron productos"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Language + Mobile menu */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex bg-white/10 rounded-full p-0.5">
              {(["pt", "en", "es"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === l
                      ? "bg-[#fb6a10] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white/80 hover:text-white"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2c2c2c] border-t border-white/10 px-4 pb-4">
          {/* Mobile search */}
          <div className="relative py-3">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              placeholder={
                lang === "pt" ? "Buscar produto..." : lang === "en" ? "Search product..." : "Buscar producto..."
              }
              className="w-full bg-white/10 text-white text-sm placeholder-white/30 pl-10 pr-8 py-2.5 rounded-lg border border-white/10 focus:outline-none focus:border-[#fb6a10]/50"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
            {/* Mobile suggestions */}
            {searchOpen && suggestions.length > 0 && (
              <div className="mt-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {suggestions.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProduct(p.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors"
                  >
                    <div
                      className="w-7 h-9 rounded flex-shrink-0 flex items-center justify-center text-white text-[5px] font-bold"
                      style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}
                    >
                      NE
                    </div>
                    <div className="min-w-0">
                      <div className="text-white text-sm font-medium truncate">{p.name[lang]}</div>
                      <div className="text-white/40 text-xs truncate">{p.shortBenefit[lang]}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="/#top" onClick={() => setMenuOpen(false)} className="block py-3 text-white/80 hover:text-[#fb6a10] transition-colors font-medium">
            {t("navHome")}
          </a>
          <Link href="/products" onClick={() => setMenuOpen(false)} className="block py-3 text-white/80 hover:text-[#fb6a10] transition-colors font-medium">
            {t("navProducts")}
          </Link>
          <a href="/#about" onClick={() => setMenuOpen(false)} className="block py-3 text-white/80 hover:text-[#fb6a10] transition-colors font-medium">
            {t("navAbout")}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-3 text-white/80 hover:text-[#fb6a10] transition-colors font-medium">
            {t("navContact")}
          </a>
        </div>
      )}
    </nav>
  );
}
