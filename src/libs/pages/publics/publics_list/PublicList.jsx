import styles from "./PublicList.module.scss";

import Item from "../Item/Item";

export default function PublicList({ blog_list }) {
  return (
    <ul className={styles.list}>
      {blog_list && blog_list.map((el, id) => <Item key={id} {...el} />)}
    </ul>
  );
}
