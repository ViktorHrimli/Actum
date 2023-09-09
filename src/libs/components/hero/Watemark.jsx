import Image from "next/image";

import watemark from "@/assets/svg/Actum_HERO.png";
import watemark_mobile from "@/assets/svg/actum_watemark_mobile.png";

export default function Watemark({ screen }) {
  return (
    <Image
      src={screen ? watemark_mobile : watemark}
      alt="ACTUM"
      priority={true}
      placeholder="empty"
      sizes="(max-width: 768px) 100vw"
      fill
      style={{ objectFit: "cover" }}
    />
  );
}
