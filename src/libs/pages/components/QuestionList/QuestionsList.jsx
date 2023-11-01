import styles from "./QuestionsList.module.scss";

import Accordion from "./Accordion";
import About from "../../../components/about/About";

import natalia from "@/assets/svg/natalia_lawyers.png";

import { specialistsEnums } from "@/libs/pages/components/specialists/libs/enums";
import { questionEnums } from "@/libs/pages/components/QuestionList/libs/enums/enums";

export default function QuestionsList({ type }) {
  const { color } = specialistsEnums[type];

  return (
    <section className={styles.section}>
      <About img={natalia} type={type} />
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
          {questionEnums.map((items, id) => (
            <li key={id}>
              <Accordion {...items} type={type} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
