import styles from "./Price.module.scss";

import Items from "./items/Items";

import {priceEnums} from "./libs/enums"


export default function Price({ type }) {
  const { color } = priceEnums[type];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <div className={styles[color]}></div>
            <div className={styles.text}>
              <h2 className={styles.title}>
                <span className={styles.position_title}>варіанти</span>
                <span className={styles.position}>послуг</span>
              </h2>
            </div>
          <div className={styles[color]}></div>
        </div>
        <Items type={type}/>
      </div>
    </section>
  )
}