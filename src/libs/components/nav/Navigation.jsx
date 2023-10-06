import Link from "next/link";

import Select from "./SelectNav/Select";
import ArrowOpen from "./Animated/ArrowOpen";

import styles from "./Navigation.module.scss";

export default function Navigation({
  route,
  onClick,
  onHover,
  setOnHover,
  isMobile,
  setIsOpenMenu,
  nav,
  servicesRoute,
  isOpenMenu,
  isLocal = "",
}) {
  const SERVICES = "послуги";

  return (
    <div style={{ position: "relative" }}>
      <ul className={styles.nav_list}>
        {nav.map(({ title, name_page, path, locale, id }) => (
          <li
            key={id}
            className={styles.link}
            onMouseOver={() =>
              title.toLowerCase() === SERVICES
                ? setOnHover(true)
                : setOnHover(false)
            }
          >
            <Link
              className={
                route === path ? styles.active_link : styles.not_active_link
              }
              href={isLocal ? `/${isLocal}/${path}` : path}
              onClick={onClick}
            >
              <p>{title.toUpperCase()}</p>
            </Link>

            {isMobile && title.toLowerCase() === SERVICES && (
              <ArrowOpen
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              />
            )}

            {isMobile && isOpenMenu && title.toLowerCase() === SERVICES && (
              <Select
                routes={servicesRoute}
                onClick={onClick}
                isOpen={isOpenMenu}
                isMobile={isMobile}
              />
            )}
          </li>
        ))}
      </ul>
      {!isMobile && onHover && (
        <Select
          isOpen={onHover}
          onClick={onClick}
          routes={servicesRoute}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
