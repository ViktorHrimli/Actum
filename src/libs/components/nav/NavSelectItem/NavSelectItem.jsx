import Link from "next/link";

import { useState } from "@/libs/hooks/hooks";

import ArrowMenu from "@/libs/components/arrow_menu/ArrowMenu";

import styles from "./NavSelectItem.module.scss";

export default function NavSelectItem({
  service,
  path,
  thems,
  onClick,
  isOpenIndex,
  dispatch,
}) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleClick = () => {
    dispatch({ type: path, payload: !isOpenSelect });
    setIsOpenSelect(!isOpenSelect);
  };

  //  "path": "Батьки",
  //                           "slug": "parents/",
  //                           "title": "Батьки",
  //                           "createdAt": "2023-10-01T21:15:15.365Z",
  //                           "updatedAt": "2023-10-01T21:16:32.408Z",
  //                           "publishedAt": "2023-10-01T21:15:23.155Z",
  //                           "locale": "uk",
  //                           "seoURL": "gratituide-1",
  //                           "description": "adawdadawd"

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
          <p className={styles.text}>{service}</p>
        </Link>
        <ArrowMenu isOpenSelect={isOpenIndex[path]} setIsOpen={handleClick} />

        <div className={styles.line}></div>
      </div>

      {isOpenSelect && isOpenIndex[path] && (
        <ul className={styles.nested_select_list}>
          {thems.map(({ thema }, id) => (
            <li key={id} className={styles.item_list}>
              <p className={styles.text_current}>{thema}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
