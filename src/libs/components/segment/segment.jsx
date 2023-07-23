import styles from "./styles.module.scss";

const Segment = ({ children }) => (
  <div className={styles.segment}>{children}</div>
);

export { Segment };
