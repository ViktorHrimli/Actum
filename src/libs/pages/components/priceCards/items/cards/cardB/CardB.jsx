import styles from "./CardB.module.scss";

import { cardsEnums } from "../../libs/enums";

export default function CardA({ type, title, description, price_description }) {
  const { color, background } = cardsEnums[type];

  return (
    <div
      className={`${styles.position} ${styles[background]} ${styles.flex_conteiner}`}
    >
      <div className={`${styles[color]} ${styles.conteiner_block}`}>
        <div className={styles.container_title}>
          {price_description.map((item, id) => (
            <div key={id} className={styles.conteiner_box_wrapper}>
              <p className={styles.title}>
                {item.price}
                <span className={styles.currency}>{item.currency}</span>
              </p>
              <p className={styles.paragraph}>{item.place}</p>
            </div>
          ))}
        </div>
        <p className={styles.text}>{title}</p>
        <div className={styles.container_text}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
