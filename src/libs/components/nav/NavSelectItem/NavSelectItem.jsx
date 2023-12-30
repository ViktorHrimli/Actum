import Link from "next/link";

import { useState, useEffect, usePathname } from "@/shared/hooks/hooks";

import ArrowMenu from "@/shared/components/arrow_menu/ArrowMenu";

import styles from "./NavSelectItem.module.scss";

export default function NavSelectItem({
  Title: title,
  path,
  List: list,
  onClick,
  setisCurrent,
  isCurrent,
  directions,
  locale = false,
  id,
}) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [dirPage, setDirPage] = useState("");

  const pathName = usePathname();

  useEffect(() => {
    setIsOpenSelect(isCurrent === id ? true : false);
  }, [isCurrent]);

  useEffect(() => {
    switch (directions) {
      case "root":
        setDirPage("");
        break;

      case "services":
        setDirPage("services");
        break;

      case "other":
        setDirPage("other");
        break;

      default:
        setDirPage("");
        break;
    }
  }, [pathName]);

  var shortDir = locale ? `/ru/${dirPage}` : `/${dirPage}`;

  return (
    <li className={styles.link} onClick={() => {}}>
      <article
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          textDecoration: "none",
        }}
      >
        <Link
          href={`${directions === "root" ? "" : shortDir}/${path}`}
          rel="alternate"
          prefetch={false}
          hrefLang={locale ? "ru" : "uk"}
          onClick={onClick}
          className={styles.link_service}
        >
          <p className={styles.text}>{title}</p>
        </Link>
        <ArrowMenu
          isOpenSelect={isOpenSelect}
          setIsCurrent={setisCurrent}
          id={id}
          isHaveList={list.length}
        />

        <div className={styles.line}></div>
      </article>

      {isOpenSelect && (
        <ul className={styles.nested_select_list}>
          {list.map(({ text, path: pathsService }, id) => (
            <li key={id} className={styles.item_list} onClick={onClick}>
              <Link
                rel="alternate"
                prefetch={false}
                hrefLang={locale ? "ru" : "uk"}
                href={
                  dirPage
                    ? `${shortDir}/${path}/${pathsService}`
                    : `/${path}/${pathsService}`
                }
              >
                <p className={styles.text_current}>{text}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
