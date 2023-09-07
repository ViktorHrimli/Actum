import Image from "next/image";
import Link from "next/link";

import { useState } from "@/libs/hooks/hooks";

import ArrowMenu from "@/libs/components/arrow_menu/ArrowMenu";

import styles from "./NavSelectItem.module.scss";

export default function NavSelectItem({ service, path, thems, onClick }) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const onClickOnDropMenu = () => setIsOpenSelect(!isOpenSelect);
  return (
    <li className={styles.link} onClick={() => {}}>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link href={path} onClick={onClick} className={styles.link_service}>
          <p className={styles.text}>{service}</p>
        </Link>
        <ArrowMenu isOpenSelect={isOpenSelect} setIsOpen={setIsOpenSelect} />

        <div className={styles.line}></div>
      </div>

      {isOpenSelect && (
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
