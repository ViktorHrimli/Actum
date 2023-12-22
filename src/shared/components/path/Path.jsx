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

  return (
    <div className={styles.breadcrumbs} itemScope itemType="https://schema.org/BreadcrumbList">
  <div className={styles.wrapper_path} itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">

        <Link href={`/${parent_link}`} prefetch={false} scroll={true}>
        <meta itemProp="position" content="1" />
          
      <p className={styles.service_text} itemProp="item" itemScope itemType="https://schema.org/WebPage">
        <span itemProp="name">{parent_page}</span>
        <meta itemProp="position" content="2" />
      </p>
    </Link>

    <FontAwesomeIcon
      icon={faAnglesRight}
      className={`${styles.arrow_icon} ${styles[type]}`}
    />

    {isNestedPage ? (
      <Link href={`/${children_link}`}>
        <p
          className={`${styles.path_text} ${styles[type]} ${styles.link}`}
          itemProp="item"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <span itemProp="name">{children_page}</span>
          <meta itemProp="position" content="3" />
        </p>
      </Link>
    ) : (
      <div itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
        <p
          className={`${styles.path_text} ${styles[type]} ${styles.link}`}
          itemProp="item"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <span itemProp="name">{children_page}</span>
          <meta itemProp="position" content="3" />
        </p>
      </div>
    )}

    {isNestedPage && (
      <>
        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${styles.arrow_icon} ${styles[type]}`}
        />
        <p
          className={`${styles.path_text} ${styles[type]}`}
          itemProp="item"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <span itemProp="name">{nested_page_title}</span>
          <meta itemProp="position" content="4" />
        </p>
      </>
    )}
  </div>
</div>

  );
}
