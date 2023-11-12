import styles from "./QuestionsList.module.scss";

import Accordion from "./Accordion";
import About from "@/shared/components/about/About";

import { specialistsEnums } from "@/libs/pages/components/specialists/libs/enums";

export default function QuestionsList({ type, questions, about_block }) {
  const { color } = specialistsEnums[type];

  return (
    <>
      <About type={type} {...about_block} />
      <section className={styles.section}>
        <div className={styles.questions_conteiner}>
          <div className={styles.container_title}>
            <div className={styles[color]}></div>
            <div className={styles.wrapper_text}>
              <h3
                className={`${styles.title_questions} ${styles.left_questions}`}
              >
                Популярні
              </h3>
              <h3
                className={`${styles.title_questions} ${styles.right_questions}`}
              >
                Запитання
              </h3>
            </div>
            <div className={styles[color]}></div>
          </div>
          <ul className={styles.list}>
            {questions.map((items, id) => (
              <li key={id}>
                <Accordion {...items} type={type} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
