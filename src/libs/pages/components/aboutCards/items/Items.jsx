import styles from "./Items.module.scss";

import { cardsEnums } from "./libs/enums";

export default function Items({ type, listCard }) {
  const { color, background } = cardsEnums[type];

  return (
    <ul className={styles.container}>
      {listCard?.map((el, id) => (
        <li key={id} className={`${styles.position} ${styles[background]}`}>
          <div className={styles[color]} key={id}>
            <div className={styles.container_title}>
              <p className={styles.title}>{el.title}</p>
            </div>
            <a className={styles.text}>{el.description}</a>
            <div className={styles.container_text}>
              <p className={styles.description}>{el.exposition}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
