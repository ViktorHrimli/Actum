import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./Response.module.scss";

import Card1 from "@/assets/svg/Card_1.png";
import Card2 from "@/assets/svg/Card_2.png";

const arrPerson = [
  {
    name: "Данилова Анастасія",
    body: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. Nuncvulputate libero et velit interdum, ac aliquet odio mattis",
    date: "May 22 at 11:03",
    photo: Card1,
  },
  {
    name: "Данилова Анастасія",
    body: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. Nuncvulputate libero et velit interdum, ac aliquet odio mattis",
    date: "May 22 at 11:03",
    photo: Card2,
  },
];

export default function Response() {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner_section}>
        <div className={styles.box_title}>
          <div className={styles.direction_line}></div>
          <h2 className={styles.title_text}>наші напрями</h2>
          <div className={styles.direction_line}></div>
        </div>

        <div className={styles.rigth_conteiner}>
          <div className={styles.conteiner_text}>
            <p className={styles.text}>
              Наші клієнти залишають свої відгуки у Телеграм каналі, звідти вони
              автоматично без редагування, генеруються на наш сайт. Всі відгуки
              є справжніми, створені реальними людьми.
            </p>
          </div>

          <ul className={styles.card_list_response}>
            {arrPerson.map((item, id) => (
              <Card key={id} {...item} />
            ))}
          </ul>
          <Button onClick={() => {}} params={"consult"} type={"button"} />
        </div>
      </div>
    </section>
  );
}
