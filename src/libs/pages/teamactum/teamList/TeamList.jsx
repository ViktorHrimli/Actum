import LeftBar from "@/libs/components/left_bar_text/LeftBar";
import Items from "../items/Items";

import styles from "./TeamList.module.scss";

export default function TeamList() {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <LeftBar text="наші фахівці" type="family" />
        <ul className={styles.list}>
          {Array.from({ length: 6 }, (_, id) => (
            <Items key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
