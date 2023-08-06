import styles from "./Lawyers.module.scss";

import Items from "./items/Items";


export default function Lawyers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}> 
        <div className={styles.gradient_first}></div>
        <div className={styles.gradient_second}></div>
        <div className={styles.gradient_third}></div>
        
        <div className={styles.container_text}>
          <div className={styles.line}></div>
            <div className={styles.container_title}>
              <p className={styles.title}>Наші адвокати мають значний досвід представництва інтересів фізичних та юридичних осіб в різноманітних справах. Ваші питання можуть вирішити настіпні спеціалісти:</p>
            </div>
          <div className={styles.line}></div>
        </div>
        <div style={{ height: '100%'}}>
          <Items />
        </div>
      </div>
    </section>
  )
}