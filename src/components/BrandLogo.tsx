"use client";

import { useState } from "react";
import Image from "next/image";

const sources = [
  "/images/logos/nutra-essential.png",
  "/images/logos/nutra-essential.svg",
];

interface BrandLogoProps {
  size?: number;
}

export default function BrandLogo({ size = 40 }: BrandLogoProps) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  function handleError() {
    const next = srcIndex + 1;
    if (next < sources.length) {
      setSrcIndex(next);
    } else {
      setImgFailed(true);
    }
  }

  if (!imgFailed) {
    return (
      <Image
        key={sources[srcIndex]}
        src={sources[srcIndex]}
        alt="Nutra Essential"
        width={size}
        height={size}
        className="object-contain transition-transform group-hover:scale-110"
        style={{ width: size, height: size }}
        onError={handleError}
      />
    );
  }

  return (
    <div
      className="rounded-lg bg-gradient-to-br from-[#fb6a10] to-[#fa8a42] flex items-center justify-center font-bold text-white tracking-tighter transition-transform group-hover:scale-110"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      NE
    </div>
  );
}
