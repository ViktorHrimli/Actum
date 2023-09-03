"use client";

import { useIsBig, useState, useEffect } from "@/libs/hooks/hooks";

import Items from "./items/Items";

import { gradientEnums } from "./libs/enums";

import styles from "./SuccessfulBusiness.module.scss";

export default function SuccessfulBusiness({ type }) {
  const [isChang, setisChange] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isLeft, setIsLeft] = useState(true);

  const isDesktop = useIsBig();

  const { gradient, gradientRight } = gradientEnums[type];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles[gradient]}></div>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2 className={styles.title}>Успішні справи</h2>
        </div>
        <div>
          {isClient && (
            <Items
              type={type}
              screen={isDesktop}
              current={isChang}
              setIsChange={setisChange}
              setIsLeft={setIsLeft}
              isLeft={isLeft}
            />
          )}
        </div>
      </div>
      <div className={styles[gradientRight]}></div>
    </section>
  );
}
