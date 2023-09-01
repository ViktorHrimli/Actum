import styles from "./CardC.module.scss";
import { cardsEnums } from "../../libs/enums"

export default function CardC({ type }) {
  const { color, background } = cardsEnums[type];

  return (
    <div className={`${styles.position} ${styles[background]}`}>
      <div className={styles[color]}>
        <div className={styles.container_title}>
          <p className={styles.title}><span className={styles.currency}>ціна є договірною</span></p>
        </div>
        <p className={styles.text}>ЗАХИСТ В КРИМІНАЛЬНИХ ВІЙСЬКОВИХ СПРАВАХ</p>
        <div className={styles.container_text}>
          <p className={styles.description}>СЗЧ, Непокора, Невиконання наказу, Зброя, тощо. Комплексний адвокатський захист у т.ч. досудовий захист, у судах та інших органах. Зверніться до адвоката раніше ніж ДБР звернеться до Вас.</p>
        </div>
      </div>
    </div>
  )
};