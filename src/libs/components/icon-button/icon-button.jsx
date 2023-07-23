import { Icon } from "../icon/icon.jsx";
import styles from "./styles.module.scss";

const IconButton = ({ iconName, label, onClick }) => (
  <button className={styles.iconButton} type="button" onClick={onClick}>
    <Icon name={iconName} />
    {label}
  </button>
);

IconButton.defaultProps = {
  label: "",
};

export { IconButton };
