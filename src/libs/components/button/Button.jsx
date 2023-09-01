import { colorBorderEnums } from "./libs/enums";

import styles from "./Button.module.scss";

export default function Button({
  onClick,
  type,
  text,
  style,
  typeStyle = "family",
}) {
  const { gradientBorder } = colorBorderEnums[typeStyle];

  return (
    <button
      type={type}
      className={`${styles[style]} ${styles[gradientBorder]}`}
    >
      {text}
    </button>
  );
}
