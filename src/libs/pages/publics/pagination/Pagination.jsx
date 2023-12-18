import { iconEnum } from "@/shared/enums/enum";

import styles from "./Pagination.module.scss";

export default function Pagination({ prev, next }) {
  var pink = "#E32F7A";
  return (
    <div className={styles.conteiner_pagination}>
      <div
        className={`${styles.wrapper_arrow} ${styles.previos_arrow}`}
        onClick={prev}
      >
        {iconEnum["horizontalArrow"](pink)}
        <p>попередня сторінка</p>
      </div>
      <div
        className={`${styles.wrapper_arrow} ${styles.next_arrow}`}
        onClick={next}
      >
        <div style={{ rotate: "180deg" }}>
          {iconEnum["horizontalArrow"](pink)}
        </div>
        <p>наступна сторінка</p>
      </div>
    </div>
  );
}
