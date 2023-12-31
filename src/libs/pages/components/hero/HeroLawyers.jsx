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
      <article className={styles.section}>
        <h1 hidden>
          <strong>{title}</strong>
        </h1>
        <section className={styles.conteiner}>
          <Image
            src={background["data"]["attributes"]["url"]}
            alt={"background"}
            fill
            fetchPriority="high"
            priority={true}
            loading="eager"
            style={{ objectFit: "cover" }}
          />
          <section className={styles.conteiner_hero_watemark}>
            <div className={styles.title_wotemark}>
              <Image
                src={actum_png["data"]["attributes"]["url"]}
                alt="ACTUM"
                fill
                loading="eager"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className={styles.title_text}>{title}</h1>
          </section>
          <div className={styles[style]}></div>
        </section>
        <Path type={color} {...bread_crumbs} />
      </article>
    </>
  );
}
