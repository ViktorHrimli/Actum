import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useState } from "@/libs/hooks/hooks";

import arrow from "@/assets/svg/arrow_up.svg";

import styles from "./NavSelectItem.module.scss";

export default function NavSelectItem({ service, thems }) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const onClickOnDropMenu = () => setIsOpenSelect(!isOpenSelect);
  return (
    <li className={styles.link} onClick={onClickOnDropMenu}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p className={styles.text}>{service}</p>
        <motion.div
          className={styles.img_wrapper}
          animate={{ rotate: isOpenSelect ? "180deg" : "0deg" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={arrow}
            alt="arrow"
            fill
            loading="lazy"
            className={styles.icon}
          />
        </motion.div>
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
