import styles from "./CardD.module.scss";
import { cardsEnums } from "../../libs/enums"

export default function CardD({ type }) {
  const { color, background } = cardsEnums[type];

  return (
    <div className={`${styles.position} ${styles[background]}`}>
      <div className={styles[color]}>
        <div className={styles.container_title}>
          <p className={styles.currency}>від</p>
          <p className={styles.title}>2500</p>
        </div>
        <div className={styles.laptop_box}>
          <p className={styles.currency}>гривень</p>
        </div>
        <p className={styles.text}>СКЛАДАННЯ РАПОРТІВ, СКАРГ, ЗАПИТІВ, ТОЩО</p>
        <div className={styles.container_text}>
          <p className={styles.description}>Часто для вирішення питання треба знати куди та як направити необхідні клопотання, запити, скарги…
Ми будемо писати, надсилати та супроводжувати документи в установах для вирішення Вашого питання.</p>
        </div>
      </div>
    </div>
  )
};