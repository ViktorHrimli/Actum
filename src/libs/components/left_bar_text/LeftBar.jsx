import styles from "./LeftBar.module.scss";
// import { leftBarEnums } from "./libs/enums";


export default function LeftBar({ text, type }) {
  // const { color } = leftBarEnums[type];
  return (
    <div className={styles.conteiner}>
      <div className={styles.line}></div>
      <h2 className={styles.title_text}>{text}</h2>
      <div className={styles.line}></div>
    </div>
  );
}
