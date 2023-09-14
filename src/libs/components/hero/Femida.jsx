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
    />
  );
}
