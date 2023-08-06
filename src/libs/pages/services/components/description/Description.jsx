import styles from "./Description.module.scss";


export default function Descrition() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>         
        <div className={styles.container_text}>
          <div className={styles.line}></div>
            <div className={styles.container_title}>
              <p className={styles.title}>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
            </div>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  )
}