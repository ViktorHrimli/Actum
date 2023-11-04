import Link from "next/link";

import styles from "./Specialists.module.scss";
import Button from "@/libs/components/button/Button";

import { specialistsEnums } from "./libs/enums";

import Items from "./items/Items";

export default function Specialists({
  type,
  employee_list,
  description_maps,
  city_maps,
  title_block,
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
          city_text={city_maps}
          mapst_text={description_maps}
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
