import Image from "next/image";

import styles from "./CurrentPublication.module.scss";

import Button from "@/libs/components/button/Button";

import img from "@/assets/svg/publics_item_1.png";
import Search from "@/shared/components/search/Search";

export default function CurrentPublication({
  button,
  title,
  description,
  topic_text,
  picture,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <h2 className={styles.title_text}>{title}</h2>
        <div className={styles.wrapper_content}>
          <div className={styles.text_conteiner}>
            <p className={styles.text}>{description}</p>

            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: topic_text }}
            ></div>
          </div>

          <div className={styles.image_wrapper}>
            <Image
              src={picture["data"]["attributes"]["url"] ?? img}
              alt={"photo thems"}
              fill
              sizes="(max-width: 767px) 280px, (max-width: 1280px) 663px, 500px"
              fetchPriority="low"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.btn_wrapper}>
              <Button
                style={"button_service"}
                text={button["text"]}
                type={"button"}
              />
            </div>
          </div>
        </div>
        <Search />
      </div>
    </section>
  );
}
