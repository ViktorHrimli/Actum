import Image from "next/image";

import femida from "@/assets/svg/HERO_FEMIDA.png";
import femida_mobile from "@/assets/svg/femida_mobile.png";

export default function Femida({ screen }) {
  return (
    <Image
      src={
        screen
          ? "https://res.cloudinary.com/de0iwhqf4/image/upload/v1694608953/actum/gka0z0p42fgb8gio9ytw.png"
          : "https://res.cloudinary.com/de0iwhqf4/image/upload/v1694608953/actum/gka0z0p42fgb8gio9ytw.png"
      }
      alt="Femida"
      priority={true}
      fill
      sizes="(min-width: 320px) 90vw, (min-width: 768px) 100vw, (min-width: 1280px) 60vw"
    />
  );
}
