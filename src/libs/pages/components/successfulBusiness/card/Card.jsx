import Image from "next/image";

import styles from "./Card.module.scss";

export default function Card({ type, enums, title, description, image }) {
  const { background, borderTop, borderRight, borderBottom, bordeerLeft } =
    enums[type];
  return (
    <li className={styles.position}>
      <div className={styles.container_img}>
        <Image src={image} alt={"sucsses bussines"} fill loading="lazy" />
      </div>
      <div className={styles[background]}>
        <div className={styles.container_text}>
          <div className={`${styles[borderTop]}`}>
            <div className={styles[borderRight]}></div>
          </div>
          <div className={styles.container_title}>
            <p className={styles.title}>{title}</p>
          </div>
          <div className={styles.container_description}>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles[borderBottom]}>
            <div className={styles[bordeerLeft]}></div>
          </div>
        </div>
      </div>
    </li>
  );
}
