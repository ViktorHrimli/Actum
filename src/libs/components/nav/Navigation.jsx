import Link from "next/link";

import styles from "./Navigation.module.scss";
import Select from "./SelectNav/Select";

export default function Navigation({
  links,
  route,
  onClick,
  onHover,
  setOnHover,
}) {
  return (
    <div>
      <ul className={styles.nav_list}>
        {links.map(({ path, title, items }, id) => (
          <li
            key={id}
            onClick={onClick}
            className={styles.link}
            onMouseOver={() =>
              title === "наші послуги" ? setOnHover(true) : setOnHover(false)
            }
          >
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
            {items && onHover && <Select routes={items} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
