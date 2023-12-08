"use client";
import Link from "next/link";

import styles from "./Path.module.scss";

import { useEffect } from "@/shared/hooks/hooks";

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
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  console.log(children_link);

  return (
    <div className={styles.conteiner}>
      <div className={styles.wrapper_path}>
        <Link href={`/${parent_link}`} scroll={true}>
          <p className={styles.service_text}>{parent_page}</p>
        </Link>

        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${styles.arrow_icon} ${styles[type]}`}
        />
        {isNestedPage ? (
          <Link href={`/${children_link}`}>
            <p className={`${styles.path_text} ${styles[type]} ${styles.link}`}>
              {children_page}
            </p>
          </Link>
        ) : (
          <p className={`${styles.path_text} ${styles[type]} ${styles.link}`}>
            {children_page}
          </p>
        )}
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
