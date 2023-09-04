
"use client";
import { useIsSmall, useState, useEffect } from "@/libs/hooks/hooks";

import Items from "./items/Items";
import Arrow from "@/libs/components/arrowCard/Arrow";

import { priceEnums } from "./libs/enums";

import styles from "./Price.module.scss";


export default function Price({ type }) {
  const { color } = priceEnums[type];

  const [isChange, setisChange] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isLeft, setIsLeft] = useState(true);

  const isMobile = useIsSmall();

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
              <span className={styles.position_title}>варіанти</span>
              <span className={styles.position}>послуг</span>
            </h2>
          </div>
          <div className={styles[color]}></div>
        </div>

        {isMobile && isClient && (
          <Arrow
            left={true}
            setIsChange={setisChange}
            setIsLeft={setIsLeft}
            isChange={isChange}
          />
        )}

        {isClient && (
          <Items
            type={type}
            isMobile={isMobile}
            current={isChange}
            isLeft={isLeft}
          />
        )}

        {isMobile && isClient && (
          <Arrow
            left={false}
            setIsChange={setisChange}
            setIsLeft={setIsLeft}
            isChange={isChange}
          />
        )}
      </div>
    </section>
  );
}
