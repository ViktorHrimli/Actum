import styles from "./CardB.module.scss";
import { cardsEnums } from "../../libs/enums"

export default function CardA({ type }) {
  const { color, background } = cardsEnums[type];

  return (
    <div className={`${styles.position} ${styles[background]}`}>
      <div className={styles[color]}>
          <div className={styles.container_title}>
          <p className={styles.title}>550<span className={styles.currency}>гривень</span></p>
          <p className={styles.paragraph}>письмово в чаті</p>
          <p className={styles.title}>950<span className={styles.currency}>гривень</span></p>
          <p className={styles.paragraph}>в офісі</p>
        </div>
          <p className={styles.text}>ФАХОВА КОНСУЛЬТАЦІЯ АДВОКАТА</p>
          <div className={styles.container_text}>
            <p className={styles.description}>Детальна консультація адвоката. З вивченням документів, опису процедур, описом можливостей, ризиків та плану дій.</p>
          </div>
      </div>
    </div> 
  )
};