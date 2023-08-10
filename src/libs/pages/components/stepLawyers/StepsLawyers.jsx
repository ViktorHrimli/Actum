import Image from "next/image";

import StepsImageMob from "src/assets/svg/StepsLawyersMob.jpg";

import styles from "./StepsLawyers.module.scss";
import Button from "@/libs/components/button/Button";


export default function StepsLawyers() {
  return (
    <section className={styles.section}>
      <div className={styles.img}>
        <Image
          src={StepsImageMob}
          alt={"our team"}
          fill
          loading="lazy"
          style={{objectFit: "cover" }}
        />
      </div>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <div className={styles.container_number}>
              <p className={styles.number}>1</p>
            </div>
            <div className={styles.container_text}>
              <p className={styles.title}>знайомтесь з варіантами наших послуг</p>
              <p lassName={styles.text}>Оберіть варіант запропонованої послуги: супровід справи, консультація в офісі або онлайн.</p>
            </div>
          </li>
          <li className={styles.link}>
            <div className={styles.container_number}>
              <p className={styles.number}>2</p>
            </div>
            <div className={styles.container_text}>
              <p className={styles.title}>Зв’яжіться з помічником Адвокатів “Актум”</p>
              <p lassName={styles.text}>Опишіть якісно свою проблему. Заповніть форму або подзвоніть нам, щоб обрати час бесіди і фахівця.</p>
            </div>
          </li>
          <li className={styles.link}>
            <div className={styles.container_number}>
              <p className={styles.number}>3</p>
            </div>
            <div className={styles.container_text}>
              <p className={styles.title}>Отримайте консультацію адвоката</p>
              <p lassName={styles.text}>Проведіть бесіду з адвокатом за допомогою месенджера, телефонного дзвінка або бесіди в нашому офісі. Отримайте відповіді на всі питання та доцільний план дій.</p>
            </div>
          </li>
          <li className={styles.link}>
            <div className={styles.container_number}>
              <p className={styles.number}>4</p>
            </div>
            <div className={styles.container_text}>
              <p className={styles.title}>Залишайтесь під захистом</p>
              <p lassName={styles.text}>Підтримуйте зв’язок з адвокатом та вирішуйте наявні п роблеми. Якщо адвокат буде працювати з Вами після консультації, консультація, за яку Ви заплатили, буде безкоштовна.</p>
            </div>
          </li>
        </ul>
        <div className={styles.box_btn}>
            <Button
              style={"button_service"}
              text={"замовити консультацію"}
              type={"button"}
            />
          </div>
      </div>
    </section>
  );
}