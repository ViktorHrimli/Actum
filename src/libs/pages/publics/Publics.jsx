import styles from "./Publics.module.scss";

import PublicList from "./publics_list/PublicList";
import Search from "@/libs/pages/components/search/Search";

export default function Publics() {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <PublicList />
      </div>

      <Search />
    </section>
  );
}
