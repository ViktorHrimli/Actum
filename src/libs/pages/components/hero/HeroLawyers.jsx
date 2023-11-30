import Image from "next/image";

import Path from "@/shared/components/path/Path";

import { lawyersHeroEnums } from "./libs/enums/enums";

import styles from "./HeroLawyers.module.scss";

export default function HeroLawyers({
  type,
  title,
  actum_png,
  background,
  bread_crumbs,
}) {
  const { style, color, backgroundPage } = lawyersHeroEnums[type];

  return (
    <>
      <div className={styles[backgroundPage]}></div>
      <section className={styles.section}>
        <div className={styles.conteiner}>
          <Image
            src={background["data"]["attributes"]["url"]}
            alt={"background"}
            fill
            loading="eager"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.conteiner_hero_watemark}>
            <div className={styles.title_wotemark}>
              <Image
                src={actum_png["data"]["attributes"]["url"]}
                alt="ACTUM"
                fill
                loading="eager"
              />
            </div>
            <h1 className={styles.title_text}>{title}</h1>
          </div>
          <div className={styles[style]}></div>
        </div>
        <Path type={color} {...bread_crumbs} />
      </section>
    </>
  );
}
