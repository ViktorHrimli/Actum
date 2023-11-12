import Link from "next/link";

import styles from "./Specialists.module.scss";
import Button from "@/libs/components/button/Button";

import { specialistsEnums } from "./libs/enums";

import Items from "./items/Items";

export default function Specialists({
  type,
  employee_list,
  title_block,
  description_services,
  description_city,
  button,
}) {
  const { color } = specialistsEnums[type];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <div className={styles[color]}></div>
          <h2 className={styles.title}>{title_block}</h2>
          <div className={styles[color]}></div>
        </div>
        <Items
          type={type}
          employee_list={employee_list}
          description_city={description_city}
          description_services={description_services}
        />
        <div className={styles.container_btn}>
          <Link href={button["link"]}>
            <Button
              style={"button_service"}
              text={button["text"]}
              type={"button"}
              typeStyle={type}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
