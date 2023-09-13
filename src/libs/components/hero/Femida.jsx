"use client";

import Image from "next/image";

import femida from "@/assets/svg/HERO_FEMIDA.png";
import femida_mobile from "@/assets/svg/femida_mobile.png";

export default function Femida({ screen }) {
  return (
    <Image
      src={screen ? femida : femida_mobile}
      alt="Femida"
      priority={true}
      placeholder="empty"
      fill
      sizes="(min-width: 320px) 50vw, (min-width: 768px) 70vw, (min-width: 1280px) 60vw"
    />
  );
}
