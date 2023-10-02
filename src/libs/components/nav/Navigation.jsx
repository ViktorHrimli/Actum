import Link from "next/link";

import Select from "./SelectNav/Select";
import ArrowOpen from "./Animated/ArrowOpen";

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
  isLocal = "",
}) {
  const SERVICES = "послуги";

  console.log(links);

  return (
    <div style={{ position: "relative" }}>
      <ul className={styles.nav_list}>
        {links.map(
          ({
            id,
            attributes: {
              title,
              path,
              services_lawyers: { data },
            },
          }) => (
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
                locale={isLocal ? isLocal : "uk-UA"}
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

              {isMobile && isOpenMenu && (
                <Select
                  routes={data}
                  onClick={onClick}
                  isOpen={isOpenMenu}
                  isMobile={isMobile}
                />
              )}
            </li>
          )
        )}
      </ul>
      {!isMobile && onHover && (
        <Select
          isOpen={onHover}
          onClick={onClick}
          routes={links[1].attributes.services_lawyers.data}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
