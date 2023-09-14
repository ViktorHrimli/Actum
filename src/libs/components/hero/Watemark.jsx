import Image from "next/image";

import watemark from "@/assets/svg/Actum_HERO.png";
import watemark_mobile from "@/assets/svg/actum_watemark_mobile.png";

export default function Watemark({ screen }) {
  return (
    <Image
      src={screen ? watemark_mobile : watemark}
      alt="ACTUM"
      priority={true}
      placeholder="blur"
      sizes="(min-width: 320px) 50vw, (min-width: 768px) 70vw, (min-width: 1280px) 60vw"
      fill
      style={{ objectFit: "cover" }}
    />
  );
}
