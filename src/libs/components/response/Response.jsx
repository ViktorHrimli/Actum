"use client";
import { usePathname } from "next/navigation";

import Button from "@/libs/components/button/Button";
import ItemsList from "@/libs/components/response/list/ItemsList";
import LeftBar from "@/libs/components/left_bar_text/LeftBar";

import styles from "./Response.module.scss";

import { useCallback, useEffect, useIsBig, useState } from "@/libs/hooks/hooks";

export default function Response({ type }) {
  const [isChange, setIsChange] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const path = usePathname();
  const screen = useIsBig();

  useEffect(() => {
    setIsClient(true);
    return () => {};
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

          {!screen && isClient && (
            <div
              className={styles.conteiner_icon_chevron}
              onClick={() => setIsChange(isChange >= 1 ? 0 : 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.95 19L12.95 12L17.95 5H15.5L10.5 12L15.5 19H17.95ZM12 19L6.99995 12L12 5H9.54995L4.54995 12L9.54995 19H12Z"
                  fill="#E32F7A"
                />
              </svg>
            </div>
          )}

          {isClient && <ItemsList isDesktop={screen} slide={isChange} />}

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
