import Image from "next/image";

import styles from "./AboutCompany.module.scss";

import XO from "@/assets/svg/XO.png";
import XN from "@/assets/svg/XN.png";
import Button from "../button/Button";

export default function AboutCompany() {
  const handleClick = () => {};
  return (
    <section className={styles.section}>
      <div>AAAAAAAAAAAAAA</div>
      <div className={styles.about_conteiner}>
        <h2 className={styles.title_text}>Про компанію</h2>
        <p className={styles.text}>
          Адвокатське об’єднання Актум – спільнота правників з відмінним знанням
          законодавства та багатим досвідом юридичної практики.
        </p>
        <p className={styles.text}>
          Намагаємось працювати краще всіх, щоб наш клієнт мав бажаний результат
          – як наслідок адвокатської праці. Роз’яснюємо закони без води простою
          мовою, ніколи не спізнюємось і не примушуємо себе чекати, не ведемо
          справи «по 25 років».
        </p>
        <p className={styles.text}>
          Боремось за своїх клієнтів до кінця незважаючи на протидію. У разі
          недоліків у праці конкретного юриста – компенсуємо, замінимо
          спеціаліста або повернемо гроші.
        </p>

        <div>
          <div className={styles.conteiner_partner_olena}>
            <h4 className={styles.partner}>партнер Хоменко Олена</h4>
            <Image
              src={XO}
              width={60}
              height={60}
              loading="lazy"
              alt="Підпис"
            />
          </div>
          <div className={styles.conteiner_partner_natalia}>
            <h4 className={styles.partner}>партнер Коровіна Наталя</h4>
            <Image
              src={XN}
              width={100}
              height={88}
              loading="lazy"
              alt="Підпис"
            />
          </div>
        </div>

        <Button onClick={handleClick} params={"service"} type={"button"} />
      </div>
    </section>
  );
}
