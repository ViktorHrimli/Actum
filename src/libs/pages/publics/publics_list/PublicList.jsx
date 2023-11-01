import styles from "./PublicList.module.scss";

import Item from "../Item/Item";

import { publicationsEnums } from "../libs/enums/enum";

export default function PublicList({ blog_list }) {
  console.log(blog_list);
  return (
    <ul className={styles.list}>
      {blog_list && blog_list.map((el, id) => <Item key={id} {...el} />)}
    </ul>
  );
}
