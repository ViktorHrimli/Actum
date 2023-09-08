import styles from "./PublicList.module.scss";

import Item from "../Item/Item";

import { publicationsEnums } from "../libs/enums/enum";

export default function PublicList() {
  return (
    <ul className={styles.list}>
      {publicationsEnums.map((el, id) => (
        <Item key={id} {...el} />
      ))}
    </ul>
  );
}
