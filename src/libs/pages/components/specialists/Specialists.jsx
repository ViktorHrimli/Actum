import styles from "./Specialists.module.scss";
import Button from "@/libs/components/button/Button";

import {specialistsEnums} from "./libs/enums"

import Items from "./items/Items";

export default function Specialists({ type }) {
  const { color } = specialistsEnums[type];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <div className={styles[color]}></div>
            <h2 className={styles.title}>ключові фахівці <span className={styles.position}>напряму</span></h2>
          <div className={styles[color]}></div>
        </div>
        <Items type={type}/>
        <div className={styles.container_btn}>
          <Button
              style={"button_service"}
              text={"контакти"}
              type={"button"}
              typeStyle={type}
            />
        </div>
      </div>
    </section>
  )
}