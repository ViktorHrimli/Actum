import LeftBar from "@/shared/components/left_bar_text/LeftBar";
import Items from "../items/Items";

import styles from "./TeamList.module.scss";

export default async function TeamList({ items }) {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.left_bar_conteiner}>
          <LeftBar text="наші фахівці" type="family" />
        </div>
        <ul className={styles.list}>
          {items.map((item, id) => (
            <Items key={id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
