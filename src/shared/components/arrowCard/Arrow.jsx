import styles from "./Arrow.module.scss";

import { arrPosition } from "./libs/enums";

export default function Arrow({
  left,
  setIsChange,
  setIsLeft,
  isChange,
  type,
}) {
  const { fill } = arrPosition[type];

  return left ? (
    <div
      className={styles.conteiner_icon_chevron_left}
      onClick={() => {
        setIsChange(isChange >= 1 ? 0 : 1);
        setIsLeft(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
      >
        <path d="M17.95 19L12.95 12L17.95 5H15.5L10.5 12L15.5 19H17.95ZM12 19L6.99995 12L12 5H9.54995L4.54995 12L9.54995 19H12Z" />
      </svg>
    </div>
  ) : (
    <div
      className={styles.conteiner_icon_chevron_right}
      onClick={() => {
        setIsChange(isChange >= 1 ? 0 : 1);
        setIsLeft(true);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
      >
        <path d="M17.95 19L12.95 12L17.95 5H15.5L10.5 12L15.5 19H17.95ZM12 19L6.99995 12L12 5H9.54995L4.54995 12L9.54995 19H12Z" />
      </svg>
    </div>
  );
}
