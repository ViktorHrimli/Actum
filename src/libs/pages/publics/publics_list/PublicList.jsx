import styles from "./PublicList.module.scss";

import Item from "../Item/Item";

export default function PublicList({ blog_list }) {
  var reverseList = blog_list.reverse();
  
  return (
    <ul className={styles.list}>
      <h1 style={{visibility: "hidden", position: "absolute"}}>ПУБЛІКАЦІЇ</h1>
      {reverseList.reverse().map((el, id) => (
        <Item key={id} {...el} />
      ))}
    </ul>
  );
}
