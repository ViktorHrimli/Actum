import LeftBar from "@/libs/components/left_bar_text/LeftBar";
import Items from "../items/Items";

import styles from "./TeamList.module.scss";

import { getDataTeam } from "../libs/helpers/helpers";

export default async function TeamList() {
  // const teams = await getDataTeam();

  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.left_bar_conteiner}>
          <LeftBar text="наші фахівці" type="family" />
        </div>
        <ul className={styles.list}>
          {Array.from({ length: 6 }, (_, id) => (
            <Items key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
