import styles from "./LeftBar.module.scss";

export default function LeftBar({ text }) {
  return (
    <div className={styles.conteiner}>
      <div className={styles.line}></div>
      <h2 className={styles.title_text}>{text}</h2>
      <div className={styles.line}></div>
    </div>
  );
}
