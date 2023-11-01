import styles from "./Publics.module.scss";

import PublicList from "./publics_list/PublicList";
import Search from "@/shared/components/search/Search";

export default function Publics({ blog_list }) {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <PublicList blog_list={blog_list} />
      </div>

      <Search />
    </section>
  );
}
