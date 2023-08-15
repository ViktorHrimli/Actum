import Image from "next/image";
import styles from "./QuestionsList.module.scss";

import marks from "@/assets/svg/marks.svg";
import natalia from "@/assets/svg/natalia_lawyers.png";
import Button from "@/libs/components/button/Button";

import { specialistsEnums } from "@/libs/pages/components/specialists/libs/enums";
import { questionEnums } from "@/libs/pages/components/QuestionList/libs/enums/enums";
import Accordion from "./Accordion";

export default function QuestionsList({ type }) {
  const { color } = specialistsEnums[type];

  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <div className={styles.conteiner_text}>
          <div className={styles.conteiner_title}>
            <span className={styles.icons_conteiner}>
              <Image
                src={marks}
                alt="marks"
                loading="lazy"
                width={40}
                height={40}
              />
            </span>
            <h2 className={styles.title_text}>Jorem ipsum dolor sit amet</h2>
          </div>
          <p className={styles.text}>
            Маємо значний досвід в сімейному праві - з 2008 року. Співпраця
            онлайн або в офісі Надаємо термінові та повні консультації по
            питаннях будь-якої складності. Даємо реальну оцінку строків та
            перспектив Вашої справи в умовах воєнного стану. Забезпечуємо
            представництво в судах, в інших державних органах та установах.
            Займаємось справами батьківства, складними міжнародними спорами при
            розірванні шлюбів та поділі майна.
          </p>
        </div>

        <div className={styles.image_wrapper}>
          <Image
            src={natalia}
            loading="lazy"
            placeholder="blur"
            alt="natalia"
            fill
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
          <div className={styles.btn_wrapper}>
            <Button
              style={"button_service"}
              text={"замовити консультацію"}
              type={"button"}
            />
          </div>
        </div>
      </div>
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
              <Accordion {...items} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
