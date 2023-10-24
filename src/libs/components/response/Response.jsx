"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Button from "@/libs/components/button/Button";
import ItemsList from "@/libs/components/response/list/ItemsList";
import LeftBar from "@/shared/components/left_bar_text/LeftBar";
import Arrow from "@/libs/components/arrowCard/Arrow";

import styles from "./Response.module.scss";

import { useEffect, useIsSmall, useState } from "@/shared/hooks/hooks";

export default function Response({ type, button, description, title }) {
  const [isChange, setIsChange] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isLeft, setIsLeft] = useState(true);

  const path = usePathname();
  const screen = useIsSmall();

  const isHome = path === "/";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <section className={styles.section}>
        <div className={isHome ? styles.background : ""}></div>

        <div className={styles.conteiner_section}>
          <div className={styles.left_text_conteiner}>
            <LeftBar text={title} type={type} />
          </div>

          <div className={styles.rigth_conteiner}>
            <div className={styles.conteiner_text}>
              <p className={styles.text}>{description}</p>
            </div>
            <div className={styles.position_arr_left}>
              <Arrow
                type={type}
                left={true}
                setIsChange={setIsChange}
                setIsLeft={setIsLeft}
                isChange={isChange}
              />
            </div>

            <ItemsList
              type={type}
              isMobie={screen}
              slide={isChange}
              start={isLeft}
            />

            <div className={styles.position_arr_right}>
              <Arrow
                type={type}
                left={false}
                setIsChange={setIsChange}
                setIsLeft={setIsLeft}
                isChange={isChange}
              />
            </div>
            {isHome && (
              <div className={styles.btn_wrapper}>
                <Link href={button[0]["link"]}>
                  <Button
                    text={button[0]["text"]}
                    style={"button_service"}
                    type={"button"}
                    typeStyle={type}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
}
