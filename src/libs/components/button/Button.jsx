import styles from "./Button.module.scss";

export default function Button({ onClick, type, text, style }) {  
  return (
    <div className={style === "button_service" ? styles.container_button_service : styles.container_button_prymary }>
      <button type={type} className={styles[style]}>
        {text}
      </button>
    </div>
  );
}
