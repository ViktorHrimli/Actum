import styles from "./BtnSideBar.module.scss";

export default function BtnSideBar({ onClick, isBarSide }) {
  return (
    <div className={styles.burger_menu} onClick={onClick}>
      <div
        className={
          isBarSide ? `${styles.bar} ${styles.crossed_left}` : styles.bar
        }
      ></div>
      <div
        className={
          isBarSide ? `${styles.bar} ${styles.crossed_right}` : styles.bar
        }
      ></div>
    </div>
  );
}
