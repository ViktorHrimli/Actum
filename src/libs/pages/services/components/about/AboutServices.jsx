import styles from "./AboutServices.module.scss";
import Items from "./Items";

export default function AboutServices({ locale = "ua" }) {
  const lang = locale === "ua";
  const textRu =
    "Адвокатское объединение предлагает различные услуги физическим июридическим лицам, обращающимся за правовой помощью на территорииУкраины, а также в странах Европейского союза.";
  const textUa =
    "Адвокатське об’єднання пропонує різноманітні послуги фізичним та юридичним особам, які звертаються за правовою допомогою на території України, а також в країнах Європейського союзу.";
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.about_border_text_conteiner}>
          <span className={styles.borders}></span>
          <p className={styles.text}>{lang ? textUa : textRu}</p>
          <span className={styles.borders}></span>
        </div>
        <Items />
      </div>
    </section>
  );
}
