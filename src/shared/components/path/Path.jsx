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
    <nav
      className={styles.breadcrumbs}
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <section className={styles.wrapper_path}>
        <article
          itemScope
          itemType="https://schema.org/ListItem"
          itemProp="itemListElement"
          id={`/${parent_link}`}
        >
          <Link href={`/${parent_link}`} prefetch={false} scroll={true}>

            <p
              className={styles.service_text}
              itemProp="item"
              itemScope
              itemType="https://schema.org/WebPage"
            >
              <span itemProp="name">{parent_page}</span>
            </p>
          </Link>
            <meta itemProp="position" content="1" />
        </article>

        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${styles.arrow_icon} ${styles[type]}`}
        />

        {isNestedPage ? (
          <article
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
            id={`/${children_link}`}
          >
            <Link href={`/${children_link}`}>
              <p
                className={`${styles.path_text} ${styles[type]} ${styles.link}`}
                itemProp="item"
                itemScope
                itemType="https://schema.org/WebPage"
              >
                <span itemProp="name">{children_page}</span>
              </p>
            </Link>
              <meta itemProp="position" content="2" />
          </article>
        ) : (
          <article
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
            id={`/${children_link}`}
            >
            <p
              className={`${styles.path_text} ${styles[type]} ${styles.link}`}
              itemProp="item"
              itemScope
              itemType="https://schema.org/WebPage"
            >
              <span itemProp="name">{children_page}</span>
              </p>
            <meta itemProp="position" content="2" />
              
          </article>
        )}

        {isNestedPage && (
          <article
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
            style={{ display: "flex", alignItems: "center", gap: 5 }}
            id={nested_page_title}
          >
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
            </p>
            <meta itemProp="position" content="3" />
          </article>
        )}
      </section>
    </nav>
  );
}
