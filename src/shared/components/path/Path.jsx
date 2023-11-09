"use client";
import styles from "./Path.module.scss";

import { useRouter, usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Path({
  type,
  parent_page,
  children_link,
  children_page,
  parent_link,
  isNestedPage,
  nested_page_title,
}) {
  const router = useRouter();

  const handleClickOnPath = () => {
    return router.push(`/${parent_link}`, { scroll: true });
  };

  const handleClickOnPrevPage = () => {
    return router.push(`/${children_link}`, { scroll: true });
  };

  return (
    <div className={styles.conteiner}>
      <div className={styles.wrapper_path}>
        <p className={styles.service_text} onClick={handleClickOnPath}>
          {parent_page}
        </p>

        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${styles.arrow_icon} ${styles[type]}`}
        />
        <p
          className={`${styles.path_text} ${styles[type]}`}
          onClick={isNestedPage ? handleClickOnPrevPage : () => {}}
        >
          {children_page}
        </p>
        {isNestedPage && (
          <>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className={`${styles.arrow_icon} ${styles[type]}`}
            />
            <p className={`${styles.path_text} ${styles[type]}`}>
              {nested_page_title}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
