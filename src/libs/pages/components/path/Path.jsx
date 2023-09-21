"use client";
import styles from "./Path.module.scss";

import { useRouter, usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Path({ path, type, back = "/", text }) {
  const router = useRouter();

  const psdad = usePathname().replaceAll("/", " ").split(" ");

  const handleClickOnPath = () => {
    return router.push(back, { scroll: true });
  };
  return (
    <div className={styles.conteiner}>
      <div className={styles.wrapper_path}>
        <p className={styles.service_text} onClick={handleClickOnPath}>
          {text}
        </p>

        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${styles.arrow_icon} ${styles[type]}`}
        />
        <p className={`${styles.path_text} ${styles[type]}`}>{path}</p>
        {psdad[2] && (
          <>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className={`${styles.arrow_icon} ${styles[type]}`}
            />
            <p className={`${styles.path_text} ${styles[type]}`}>{psdad[2]}</p>
          </>
        )}
      </div>
    </div>
  );
}
