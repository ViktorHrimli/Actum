import Descrition from "../description/Description";
import styles from "./AboutServices.module.scss";
import Items from "./Items";

export default function AboutServices({ locale = "ua", type, list, title }) {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <Descrition type={type} description={title} />
        <Items items={list} />
      </div>
    </section>
  );
}
