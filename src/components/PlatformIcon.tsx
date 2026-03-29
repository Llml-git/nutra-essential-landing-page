"use client";

import { useState } from "react";
import { FaAmazon, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Image from "next/image";

const builtInIcons: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Amazon: FaAmazon,
  Shopee: SiShopee,
  "TikTok Shop": FaTiktok,
};

const platformColors: Record<string, string> = {
  Amazon: "#FF9900",
  "Mercado Livre": "#2D3277",
  Shopee: "#EE4D2D",
  Ultrafarma: "#00A651",
  Magalu: "#0086FF",
  "TikTok Shop": "#ffffff",
  Bandshop: "#E91E63",
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

const extensions = ["png", "svg"];

interface PlatformIconProps {
  platform: string;
  size?: number;
  className?: string;
}

export default function PlatformIcon({ platform, size = 20, className = "" }: PlatformIconProps) {
  const slug = slugify(platform);
  const BuiltIn = builtInIcons[platform];
  const color = platformColors[platform] || "#888";
  const [extIndex, setExtIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  function handleError() {
    const next = extIndex + 1;
    if (next < extensions.length) {
      setExtIndex(next);
    } else {
      setImgFailed(true);
    }
  }

  return (
    <span className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {!imgFailed && (
        <Image
          key={extensions[extIndex]}
          src={`/images/logos/${slug}.${extensions[extIndex]}`}
          alt={platform}
          width={size}
          height={size}
          className="object-contain w-full h-full brightness-110 contrast-110"
          onError={handleError}
        />
      )}

      {imgFailed && (
        <>
          {BuiltIn ? (
            <BuiltIn size={size} style={{ color }} />
          ) : (
            <span
              className="flex items-center justify-center rounded font-bold text-white w-full h-full"
              style={{ backgroundColor: color, fontSize: size * 0.45 }}
            >
              {platform.charAt(0)}
            </span>
          )}
        </>
      )}
    </span>
  );
}

export { platformColors };
