import styles from "./LeftBar.module.scss";

export default function LeftBar({ text, type }) {
  return (
    <div className={styles.conteiner}>
      <div className={styles[type]}></div>
      <h2 className={styles.title_text}>{text}</h2>
      <div className={styles[type]}></div>
    </div>
  );
}
