import styles from "./Button.module.scss";

import { ButtonsText } from "@/libs/enums/enum";

export default function Button({ onClick, type, text, style }) {
  return (
    <button type={type} className={styles[style]}>
      {text}
    </button>
  );
}
