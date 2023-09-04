"use client";
import { usePathname } from "next/navigation";

import Button from "@/libs/components/button/Button";
import ItemsList from "@/libs/components/response/list/ItemsList";
import LeftBar from "@/libs/components/left_bar_text/LeftBar";
import Arrow from "@/libs/components/arrowCard/Arrow";

import styles from "./Response.module.scss";

import { useEffect, useIsSmall, useState } from "@/libs/hooks/hooks";

export default function Response({ type }) {
  const [isChange, setIsChange] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isLeft, setIsLeft] = useState(true);

  const path = usePathname();
  const screen = useIsSmall();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={path === "/" ? styles.background : ""}></div>

      <div className={styles.conteiner_section}>
        <LeftBar text={"наші відгуки"} type={type} />

        <div className={styles.rigth_conteiner}>
          <div className={styles.conteiner_text}>
            <p className={styles.text}>
              Наші клієнти залишають свої відгуки у Телеграм каналі, звідти вони
              автоматично без редагування, генеруються на наш сайт. Всі відгуки
              є справжніми, створені реальними людьми.
            </p>
          </div>

          {screen && isClient && (
            <Arrow
              left={true}
              setIsChange={setIsChange}
              setIsLeft={setIsLeft}
              isChange={isChange}
            />
          )}

          {isClient && (
            <ItemsList isMobie={screen} slide={isChange} start={isLeft} />
          )}

          {screen && isClient && (
            <Arrow
              left={false}
              setIsChange={setIsChange}
              setIsLeft={setIsLeft}
              isChange={isChange}
            />
          )}

          <div className={styles.btn_wrapper}>
            <Button
              onClick={() => {}}
              text={"залишити відгук"}
              style={"button_service"}
              type={"button"}
              typeStyle={type}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
