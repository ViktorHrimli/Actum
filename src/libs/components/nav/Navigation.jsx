import Link from "next/link";

import Select from "./SelectNav/Select";
import ArrowMenu from "../arrow_menu/ArrowMenu";

import styles from "./Navigation.module.scss";

export default function Navigation({
  links,
  route,
  onClick,
  onHover,
  setOnHover,
  isMobile,
  setIsOpenMenu,
  isOpenMenu,
}) {
  const SERVICES = "послуги";
  return (
    <div style={{ position: "relative" }}>
      <ul className={styles.nav_list}>
        {links.map(({ path, title, items }, id) => (
          <li
            key={id}
            className={styles.link}
            onMouseOver={() =>
              title === SERVICES ? setOnHover(true) : setOnHover(false)
            }
          >
            <Link
              className={
                route === path ? styles.active_link : styles.not_active_link
              }
              href={path}
              onClick={onClick}
            >
              {title.toUpperCase()}
            </Link>

            {isMobile && title === SERVICES && (
              <div
                style={{
                  position: "absolute",
                  right: isOpenMenu ? 0 : -67,
                  top: 3,
                  zIndex: 30,
                }}
              >
                <ArrowMenu
                  isOpenSelect={isOpenMenu}
                  setIsOpen={setIsOpenMenu}
                />
              </div>
            )}

            {isMobile && isOpenMenu && (
              <Select
                routes={items}
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
          routes={links[1].items}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
