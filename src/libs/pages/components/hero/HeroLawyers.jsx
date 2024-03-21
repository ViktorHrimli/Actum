"use client";
import Image from "next/image";

import { useState, useSearchParams } from "@/shared/hooks/hooks";
import Path from "@/shared/components/path/Path";
import { lawyersHeroEnums, thePageObj } from "./libs/enums/enums";

import styles from "./HeroLawyers.module.scss";

export default function HeroLawyers({
  type,
  title,
  actum_png,
  background,
  bread_crumbs,
}) {
  var searchParams = useSearchParams();
  const { style, color, backgroundPage } = lawyersHeroEnums[type];

  const [isContent, setIsContent] = useState(() => {
    // var json = JSON.parse(localStorage.getItem("utm"));
    var id_content = searchParams.get("utm_content");

    var theTitle = id_content && thePageObj[id_content]?.title;
    var theText = id_content && thePageObj[id_content]?.text;

    return id_content ? { theTitle, theText } : "";
  });

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
            <h1 className={styles.title_text}>
              {title}
              <span className={styles.the_title}>
                {isContent.theTitle}
                <span className={styles.the_text}>{isContent.theText}</span>
              </span>
            </h1>
          </section>
          <div className={styles[style]}></div>
        </section>
        <Path type={color} {...bread_crumbs} />
      </article>
    </>
  );
}
