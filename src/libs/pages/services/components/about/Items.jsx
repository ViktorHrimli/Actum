import Image from "next/image";
import styles from "./Items.module.scss";
import Button from "@/libs/components/button/Button";

import Link from "next/link";

export default function Items({ items }) {
  return (
    <ul className={styles.items_list}>
      {items.map((el, id) => (
        <li key={id} className={styles.item_wrapper}>
          <h2 className={styles.title_text}>{el.title}</h2>
          <div className={styles.content_wrapper}>
            <div className={styles.card__image_conteiner}>
              <Image
                src={el["photo"]["data"]["attributes"]["url"]}
                fill
                loading="lazy"
                alt={el.title}
                style={{ objectFit: "cover" }}
              />
              <div className={styles[el.styles]}></div>
              <div className={styles.img_btn}>
                <Link href={el?.button["link"]}>
                  <Button
                    text="детальніше"
                    type="button"
                    style="button_service"
                  />
                </Link>
              </div>
            </div>

            <div
              className={styles.text_list}
              dangerouslySetInnerHTML={{ __html: el["description"] }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
}
