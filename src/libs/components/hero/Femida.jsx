import Image from "next/image";

import femida from "@/assets/svg/HERO_FEMIDA.png";
import femida_mobile from "@/assets/svg/femida_mobile.png";

export default function Femida({ screen }) {
  return (
    <Image
      src={screen ? femida_mobile : femida}
      alt="Femida"
      priority={true}
      fill
      sizes="(min-width: 320px) 90vw, (min-width: 768px) 100vw, (min-width: 1280px) 60vw"
      // style={{ objectFit: "contain" }}
    />
  );
}
