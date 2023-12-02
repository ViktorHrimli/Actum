"use client";
import { useIsSmall, useState, useEffect } from "@/shared/hooks/hooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Items from "./items/Items";

import { priceEnums } from "./libs/enums";

import styles from "./Price.module.scss";

export default function Price({ type, title = "наші ціни", list }) {
  const { color } = priceEnums[type];

  const [isClient, setIsClient] = useState(false);

  const isMobile = useIsSmall();

  const [our, price] = title.split(" ");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <div className={styles[color]}></div>
          <div className={styles.text}>
            <h2 className={styles.title}>
              <span className={styles.position_title}>{our}</span>
              <span className={styles.position}>{price}</span>
            </h2>
          </div>
          <div className={styles[color]}></div>
        </div>

        {isClient && (
          <Items type={type} isMobile={isMobile} list={list} Slider={Slider} />
        )}
      </div>
    </section>
  );
}
