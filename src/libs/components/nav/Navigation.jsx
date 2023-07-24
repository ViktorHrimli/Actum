import Link from "next/link";

import styles from "./Navigation.module.scss";

export default function Navigation({ links, route }) {
  return (
    <ul className={styles.nav_list}>
      {links.map(({ path, title }, id) => (
        <li key={id}>
          <Link
            className={
              route === path
                ? `${styles.link} ${styles.active_link}`
                : styles.link
            }
            href={path}
          >
            {title.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}
