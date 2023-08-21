import Image from "next/image";

import Button from "@/libs/components/button/Button";

import watemark from "@/assets/svg/Actum_HERO.png";

import styles from "./NestedHero.module.scss";
import Link from "next/link";

export default function NestedHero({ img, text }) {
  return (
    <section className={styles.section}>
      <Image
        src={img}
        alt="bacground photo"
        fill
        priority={true}
        style={{ zIndex: -1, objectFit: "cover" }}
      />

      <div className={styles.conteiner_hero_watemark}>
        <div className={styles.title_wotemark}>
          <Image src={watemark} alt="ACTUM" fill loading="eager" />
        </div>
        <h2 className={styles.title_text}>{text}</h2>
      </div>

      <div className={styles.wrapper_btn}>
        <Link href={"/book"}>
          <Button
            type="button"
            text="замовити консультацію"
            style="button_prymary"
          />
        </Link>
      </div>

      <div className={styles.section_background}></div>
    </section>
  );
}
