import Link from "next/link";

import { useState, useEffect } from "@/shared/hooks/hooks";

import ArrowMenu from "@/shared/components/arrow_menu/ArrowMenu";

import styles from "./NavSelectItem.module.scss";

export default function NavSelectItem({
  Title: title,
  path,
  List: list,
  onClick,
  setisCurrent,
  isCurrent,
  id,
}) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

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
        <Link href={path} onClick={onClick} className={styles.link_service}>
          <p className={styles.text}>{title}</p>
        </Link>
        <ArrowMenu
          isOpenSelect={isOpenSelect}
          setIsCurrent={setisCurrent}
          id={id}
        />

        <div className={styles.line}></div>
      </div>

      {isOpenSelect && (
        <ul className={styles.nested_select_list}>
          {list.map(({ text, path: pathsService }, id) => (
            <li key={id} className={styles.item_list} onClick={onClick}>
              <Link href={`${path}${pathsService}`}>
                <p className={styles.text_current}>{text}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
