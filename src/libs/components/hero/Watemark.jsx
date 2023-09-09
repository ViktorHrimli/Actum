"use client";

import Image from "next/image";

import watemark from "@/assets/svg/Actum_HERO.png";

export default function Watemark() {
  return (
    <Image
      src={watemark}
      alt="ACTUM"
      priority={true}
      placeholder="empty"
      sizes="(max-width: 768px) 100vw"
      fill
    />
  );
}
