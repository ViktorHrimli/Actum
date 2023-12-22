import Link from "next/link";
import styles from "./Items.module.scss";
import Button from "@/libs/components/button/Button";

export default function Items({ items, desk, button }) {
  return (
    <ul className={styles.container}>
      {items?.map((el, id) => (
        <li key={id} className={styles.container_cards}>
            <Link  href={el.link} className={styles.container_cards}>
                <div className={styles.border}>
                  <div className={styles.border_right}></div>
                </div>
                <div style={{ zIndex: 5 }}>
                  <p className={styles.title}>{el.title}</p>
                </div>
                <ul>
                  {el.texts?.map(({ text }, id) => (
                    <li className={styles.list} key={id}>
                      <span className={styles.marker}></span>
                      <p className={styles.link}>{text}</p>
                    </li>
                  ))}
                </ul>
                <div className={styles.border_bottom}>
                  <div className={styles.border_left}></div>
                </div>
            </Link>
          </li>
      ))}
      <li className={styles.container_text}>
        <p className={styles.description}>{desk}</p>

        <div className={styles.container_btn}>
          <Link href={button["link"]} style={{ width: "100%", height: "100%" }}>
            <Button
              style={"button_prymary"}
              text={button["text"]}
              type={"button"}
            />
          </Link>
        </div>
      </li>
    </ul>
  );
}
