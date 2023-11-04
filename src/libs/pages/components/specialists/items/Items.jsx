import Image from "next/image";
import styles from "./Items.module.scss";

import { specialistsEnumsMap } from "./libs/enums";

export default function Items({ type, employee_list, mapst_text, city_text }) {
  const { colorMap } = specialistsEnumsMap[type];

  return (
    <ul className={styles.container}>
      {employee_list?.map((el, id) => (
        <li key={id}>
          <div>
            <div className={styles.list}>
              <div className={styles.container_title}>
                <p className={styles.title}>{el.name}</p>
              </div>
              <a className={styles.text}>{el.description}</a>
              <div className={styles.img}>
                <Image
                  src={el.photo["data"]["attributes"]["url"]}
                  alt={el.name}
                  fill
                  sizes="(max-width: 767px) 160px, 205px"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </li>
      ))}
      <li className={styles.list_map}>
        <div className={styles.img_map}>
          <Image
            src={colorMap}
            alt={"map"}
            fill
            sizes="(max-width: 1280px) 500px, 524px"
            loading="eager"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.text_map_box}>
          <p className={styles.text_map_left}>
            Працюємо по{" "}
            <span className={styles.text_bold}> всій Україні: </span>
            {mapst_text}
          </p>
        </div>
        <div className={styles.text_map_box_right}>
          <p className={styles.text_map_right}>
            Прямо сьогодні Ви можете завітати в офіс у 9 містах України:
            <span className={styles.text_bold}>{city_text}</span>
          </p>
        </div>
      </li>
    </ul>
  );
}
