import Link from "next/link";

import { useState, useEffect } from "@/shared/hooks/hooks";

import ArrowMenu from "@/shared/components/arrow_menu/ArrowMenu";

import styles from "./NavSelectItem.module.scss";

import { apiServices } from "@/shared/enums/enum";

export default function NavSelectItem({
  Title: title,
  path,
  List: list,
  onClick,
  setisCurrent,
  isCurrent,
  enums_env,
  directions,
  id,
}) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  console.log(directions);

  ("SERVICES / FIRST / SECOND");

  useEffect(() => {
    setIsOpenSelect(isCurrent === id ? true : false);
  }, [isCurrent]);

  return (
    <li className={styles.link} onClick={() => {}}>
      <div
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
          href={`${directions === "root" ? "" : `/${directions}`}/${path}`}
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
      </div>

      {isOpenSelect && (
        <ul className={styles.nested_select_list}>
          {list.map(({ text, path: pathsService }, id) => (
            <li key={id} className={styles.item_list} onClick={onClick}>
              <Link
                href={`${
                  directions === "root" ? "" : `/${directions}`
                }/${path}/${pathsService}?api=${apiServices[enums_env]}`}
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
