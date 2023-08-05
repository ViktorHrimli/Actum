import styles from "./Button.module.scss";

export default function Button({ onClick, type, text, style }) {
  return (
    <button type={type} className={styles[style]}>
      {text}
    </button>
  );
}
