import Image from "next/image";
import Link from "next/link";

import IconMap from "./IconMap";
import Button from "@/libs/components/button/Button";

import styles from "./Items.module.scss";

import { cityEnum } from "../libs/enums/enums";
import { iconEnum } from "@/shared/enums/enum";

export default function Items({
  title,
  photo,
  button,
  city,
  side_picture,
  description,
}) {
  return (
    <li style={{ position: "relative" }}>
      <div className={styles.conteiner_card}>
        <div className={styles.text_wrapper}>
          <h2 className={styles.title_text}>{title}</h2>

          <p className={styles.lawyer_text}>adad</p>

          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className={styles.map_wrapper}>
          <IconMap />
          <div className={`${styles.conteiner_pin} ${styles[city]}`}>
            <p>{cityEnum[city]}</p>
            {iconEnum["pin"]()}
          </div>
        </div>

        <div className={`${styles.image_conteiner} ${styles[side_picture]}`}>
          <Image
            src={photo["data"]["attributes"]["url"]}
            alt={title}
            quality={100}
            fill
            sizes="(max-width: 767px) 160px, (max-width: 1280px) 500px, 400px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <Link href={button["link"]}>
          <Button type="button" text="зв’язатися" style="button_service" />
        </Link>
      </div>

      <div className={styles.btn_wrapper_lawyer}>
        <Link href={button["link"]}>
          <Button type="button" text={button["text"]} style="button_service" />
        </Link>
      </div>
    </li>
  );
}
