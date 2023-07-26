import styles from "./Button.module.scss";

import { ButtonsText } from "@/libs/enums/enum";

export default function Button({ onClick, type, params }) {
  return (
    <button type={type} className={styles.button}>
      {ButtonsText[params]}
    </button>
  );
}
