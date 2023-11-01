import { colorBorderEnums } from "./libs/enums";

import styles from "./Button.module.scss";

export default function Button({
  onClick,
  type,
  text,
  style,
  typeStyle = "family",
}) {
  const { background, gradientBorder } = colorBorderEnums[typeStyle];

  return (
    <button
      type={type}
      className={`${styles[style]} 
      ${styles[gradientBorder]} 
      ${style === "button_service" ? styles[background] : ""}`}
    >
      {text}
    </button>
  );
}
