import Link from "next/link";

import styles from "./Navigation.module.scss";

export default function Navigation({ links, route, onClick }) {
  return (
    <div>
      <ul className={styles.nav_list}>
        {links.map(({ path, title }, id) => (
          <li key={id} onClick={onClick}>
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
    </div>
  );
}
