"use client";

import { useIsBig, useState, useEffect } from "@/shared/hooks/hooks";

import Items from "./items/Items";

import { gradientEnums } from "./libs/enums";

import styles from "./SuccessfulBusiness.module.scss";

export default function SuccessfulBusiness({ type, title, successful_list }) {
  const [isChang, setisChange] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isLeft, setIsLeft] = useState(true);

  const isDesktop = useIsBig();

  const { gradient, gradientRight, color } = gradientEnums[type];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles[gradient]}></div>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div>
          {isClient && (
            <Items
              list={successful_list}
              color={color}
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
