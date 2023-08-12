import Image from "next/image";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";

import styles from "./Click.module.scss";

export default function ClickIcon() {
  return (
    <>
      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        loading="lazy"
        className={styles.criminal_icon}
      />

      <Image
        src={Click}
        alt="Click"
        width={40}
        height={40}
        loading="lazy"
        className={styles.criminal_icon_click}
      />
    </>
  );
}
