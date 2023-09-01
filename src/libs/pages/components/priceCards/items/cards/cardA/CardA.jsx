import styles from "./CardA.module.scss";
import { cardsEnums } from "../../libs/enums"

export default function CardA({ type }) {
  const { color, background } = cardsEnums[type];

  return (
    <div className={styles[background]}>
      <div className={styles[color]}>
        <div>
          <p className={styles.title}>250<span className={styles.currency}>гривень</span></p>
          <p className={styles.paragraph}>письмово в чаті</p>
        </div>
        <p className={styles.text}>ШВИДКА <span className={styles.transfer}><br></br></span> ВІДПОВІДЬ ЮРИСТА</p>
        <div className={styles.container_text}>
          <p className={styles.description}>Швидка відповідь по роз’ясненню прав, ризиків чи можливостей по Вашому питанню.</p>
        </div>
      </div>
    </div>
  )
};