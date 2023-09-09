import Image from "next/image";

import femida from "@/assets/svg/HERO_FEMIDA.png";

export default function Femida() {
  return (
    <Image
      src={femida}
      alt="Femida"
      priority={true}
      fill
      sizes="(min-width: 320px) 90vw, (min-width: 768px) 100vw, (min-width: 1280px) 60vw"
    />
  );
}
