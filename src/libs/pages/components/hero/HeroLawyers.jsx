import Image from "next/image";

import { lawyersHeroEnums } from "./libs/enums/enums";

import styles from "./HeroLawyers.module.scss";

export default function HeroLawyers({ type }) {
  const { img, title, text, style } = lawyersHeroEnums[type];
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <Image
          src={img}
          alt={text}
          fill
          loading="lazy"
          style={{ objectFit: "cover" }}
        />

        <div className={styles.conteiner_hero_watemark}>
          <div className={styles.title_wotemark}>
            <Image src={title} alt="ACTUM" fill loading="eager" />
          </div>
          <h2 className={styles.title_text}>{text}</h2>
        </div>
        <div className={styles[style]}></div>
      </div>
    </section>
  );
}
