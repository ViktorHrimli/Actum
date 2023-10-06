import Link from "next/link";

import { useState } from "@/libs/hooks/hooks";

import ArrowMenu from "@/libs/components/arrow_menu/ArrowMenu";

import styles from "./NavSelectItem.module.scss";

export default function NavSelectItem({
  title,
  name_page,
  path,
  list,
  onClick,
  isOpenIndex,
  dispatch,
}) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleClick = () => {
    dispatch({ type: path, payload: !isOpenSelect });
    setIsOpenSelect(!isOpenSelect);
  };

  console.log(path);

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
        <ArrowMenu isOpenSelect={isOpenIndex[path]} setIsOpen={handleClick} />

        <div className={styles.line}></div>
      </div>

      {isOpenSelect && isOpenIndex[path] && (
        <ul className={styles.nested_select_list}>
          {list.map(({ title, path: pathsService }, id) => (
            <li key={id} className={styles.item_list}>
              <Link href={`${path}${pathsService}`}>
                <p className={styles.text_current}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
