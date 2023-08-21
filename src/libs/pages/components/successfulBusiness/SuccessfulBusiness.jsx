import styles from "./SuccessfulBusiness.module.scss";
import Items from "./items/Items";
import { gradientEnums } from "./libs/enums";



export default function SuccessfulBusiness({type}) {
  const { gradient, gradientRight } = gradientEnums[type];

  return (
    <section className={styles.section}>
    <div className={styles[gradient]}></div>
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h2 className={styles.title}>Успішні справи</h2>
        </div>
        <div>
          <Items type={type}/>
        </div>
      </div>
    <div className={styles[gradientRight]}></div>
  </section>
  )
}