"use client";

import Image from "next/image";

import femida from "@/assets/svg/HERO_FEMIDA.png";

export default function Images() {
  return (
    <Image
      src={femida}
      alt="Femida"
      fetchPriority="high"
      placeholder="blur"
      fill
      sizes="(min-width: 320px) 90vw, (min-width: 768px) 100vw, (min-width: 1280px) 60vw"
    />
  );
}
