import styles from "./styles.module.scss";

const Message = ({ children }) => (
  <div className={styles.message}>{children}</div>
);

export { Message };
