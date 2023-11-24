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
        {nav.map(({ title, path, id }) => (
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
      {/* SEO */}
      <ul style={{visibility: "hidden", position: "absolute"}}>
        {servicesRoute.map(({ List, Title, id, path }) => {
          console.log(servicesRoute);
          return <li key={id}>
            <p>{Title}</p>
            <Link href={path}></Link>
            <ul>
              {List.map(({text, path}, id) => {
                return <li key={id}>
                  <p>{text}</p>
                  <Link href={path}></Link>
                </li>
              })}
            </ul>
        </li>
      })}
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
