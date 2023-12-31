import styles from "./Arrow.module.scss";

import { iconEnum, themsColor } from "@/shared/enums/enum";

export default function Arrow({
  left,
  setIsChange,
  setIsLeft,
  isChange,
  dataLength,
  type,
}) {
  const { fill } = themsColor[type];

  return left ? (
    <div
      className={styles.conteiner_icon_chevron_left}
      onClick={() => {
        setIsChange(isChange >= dataLength - 3 ? 0 : isChange + 1);
        setIsLeft(false);
      }}
    >
      {iconEnum["horizontalArrow"](fill)}
    </div>
  ) : (
    <div
      className={styles.conteiner_icon_chevron_right}
      onClick={() => {
        setIsChange(isChange === 0 ? dataLength - 3 : --isChange);
        setIsLeft(true);
      }}
    >
      {iconEnum["horizontalArrow"](fill)}
    </div>
  );
}
