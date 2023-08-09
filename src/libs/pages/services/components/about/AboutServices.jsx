import styles from "./AboutServices.module.scss";
import Items from "./Items";

export default function AboutServices() {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.about_border_text_conteiner}>
          <span className={styles.borders}></span>
          <p className={styles.text}>
            Адвокатське об’єднання пропонує різноманітні послуги фізичним та
            юридичним особам, які звертаються за правовою допомогою на території
            України, а також в країнах Європейського союзу.
          </p>
          <span className={styles.borders}></span>
        </div>
        <Items />
      </div>
    </section>
  );
}
