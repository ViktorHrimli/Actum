"use client";
import Link from "next/link";

import { useState, usePathname } from "@/shared/hooks/hooks";

import Accordion from "./Accordion";
import About from "@/shared/components/about/About";

import { specialistsEnums } from "@/libs/pages/components/specialists/libs/enums";

import styles from "./QuestionsList.module.scss";

export default function QuestionsList({ type, questions, about_block, form }) {
  const { color } = specialistsEnums[type];

  const [isCurent, setIsCurent] = useState(null);

  const pathName = usePathname();

  const isOtherPage = pathName.includes("html-sitemap");

  const [first, second] = about_block.name_block.split(" ");

  return (
    <section>
      <About type={type} {...about_block} form={form} />
      <section className={styles.section}>
        <article className={styles.questions_conteiner}>
          <div className={styles.container_title}>
            <div className={styles[color]}></div>
            <div className={styles.wrapper_text}>
              <h2
                className={`${styles.title_questions} ${styles.left_questions}`}
              >
                {first}
              </h2>
              <h2
                className={`${styles.title_questions} ${styles.right_questions}`}
              >
                {second}
              </h2>
            </div>
            <div className={styles[color]}></div>
          </div>
          <ul className={styles.list}>
            {questions.map((items, id) => {
              return (
                <li key={id}>
                  <Accordion
                    {...items}
                    type={type}
                    id={id}
                    setIsCurent={setIsCurent}
                    isCurent={isCurent}
                  />
                </li>
              );
            })}
          </ul>
        </article>
        {/* SEO */}
        <section itemScope itemType="https://schema.org/FAQPage">
          <ol style={{ display: "none" }}>
            {questions.map((items, id) => {
              const dir = items.dir === "root" ? "" : items.dir;
              return (
                <li
                  key={id}
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <section>
                    <meta itemProp="position" content={(id + 1).toString()} />

                    <article
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <Link
                        rel="alternate"
                        hrefLang={items.link?.includes("/ru") ? "ru" : "uk"}
                        itemProp="url"
                        href={
                          items.link
                            ? items.dir
                              ? dir + `/${items.link}`
                              : `${isOtherPage ? dir : pathName}/${items.link}`
                            : ""
                        }
                      ></Link>
                    </article>
                    <h2 itemProp="name">
                      <strong>{items.title}</strong>
                    </h2>
                    <section
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{items.description}</p>
                    </section>
                  </section>
                </li>
              );
            })}
          </ol>
        </section>
      </section>
    </section>
  );
}
