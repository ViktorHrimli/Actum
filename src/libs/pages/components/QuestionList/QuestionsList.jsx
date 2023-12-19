"use client";

import { useState } from "@/shared/hooks/hooks";

import styles from "./QuestionsList.module.scss";

import Accordion from "./Accordion";
import About from "@/shared/components/about/About";

import { specialistsEnums } from "@/libs/pages/components/specialists/libs/enums";

export default function QuestionsList({ type, questions, about_block, form }) {
  const { color } = specialistsEnums[type];

  const [isCurent, setIsCurent] = useState(null);

  const [first, second] = about_block.name_block.split(" ");

  return (
    <>
      <About type={type} {...about_block} form={form} />
      <section className={styles.section}>
        <div className={styles.questions_conteiner}>
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
        </div>
        {/* SEO */}
        <ul style={{ visibility: "hidden", position: "absolute" }}>
          {questions.map((items, id) => {
            return (
              <li key={id}>
                <p>{items.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
