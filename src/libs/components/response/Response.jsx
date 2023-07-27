import Button from "../button/Button";
import Card from "../card/Card";
import styles from "./Response.module.scss";

const arrPerson = [
  {
    name: "Данилова Анастасія",
    body: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. Nuncvulputate libero et velit interdum, ac aliquet odio mattis",
    date: "May 22 at 11:03",
    photo:
      "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
  },
  {
    name: "Данилова Анастасія",
    body: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. Nuncvulputate libero et velit interdum, ac aliquet odio mattis",
    date: "May 22 at 11:03",
    photo:
      "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
  },
];

export default function Response() {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner_section}>
        <div>
          <h2>наші відгуки</h2>
        </div>
        <div className={styles.rigth_conteiner}>
          <div className={styles.conteiner_text}>
            <p className={styles.text}>
              Наші клієнти залишають свої відгуки у Телеграм каналі, звідти вони
              автоматично без редагування, генеруються на наш сайт. Всі відгуки
              є справжніми, створені реальними людьми.
            </p>
          </div>

          <div></div>
          <Button onClick={() => {}} params={"consult"} type={"button"} />
        </div>
      </div>
    </section>
  );
}
