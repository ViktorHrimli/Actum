"use client";
import styles from "./Path.module.scss";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Path({ path, type }) {
  const router = useRouter();

  const handleClickOnPath = () => {
    return router.push("/services", { scroll: true });
  };
  return (
    <div className={styles.conteiner}>
      <div className={styles.wrapper_path}>
        <p className={styles.service_text} onClick={handleClickOnPath}>
          наші послуги
        </p>

        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${styles.arrow_icon} ${styles[type]}`}
        />
        <p className={`${styles.path_text} ${styles[type]}`}>{path}</p>
      </div>
    </div>
  );
}
