import Image from "next/image";

import styles from "./AboutCompany.module.scss";
import gradient from "./AboutGradients.module.scss";

import XO from "@/assets/svg/XO.png";
import XN from "@/assets/svg/XN.png";
import Ukraine from "@/assets/svg/Ukraine.png";

import Olga from "@/assets/svg/Olga.png";
import Natalia from "@/assets/svg/Natalia.png";

import Button from "../button/Button";

export default function AboutCompany() {
  const handleClick = () => {};
  return (
    <section className={styles.section}>
      <div className={styles.conteiner_map}>
        <div className={styles.ukraine_inner_text}>
          <p>
            Працюємо по <span className={styles.bold_text}>всій Україні</span>:
            надаємо онлайн-консультації або виїзджаємо до Вас.
          </p>
        </div>
        <div className={styles.ukraine_inner_city}>
          <p>
            Прямо сьогодні Ви можете завітати в офіс у 9 містах України:
            <span className={styles.bold_text}>
              Київ, Львів, Дніпро, Миколаїв, Житомир, Кривий Ріг, Херсон,
              Покровськ.
            </span>
            : надаємо онлайн-консультації або виїзджаємо до Вас.
          </p>
        </div>
        <Image
          src={Ukraine}
          alt="Ukraine"
          width={650}
          height={448}
          style={{ position: "absolute", top: "-40px", left: "0px" }}
        />

        {/* GRADIENTS */}
        <div className={gradient.main_gradient}></div>
        <div className={gradient.second_gradient}></div>
        {/* PHOTO */}
        <div className={styles.olga_conteiner}>
          <Image
            src={Olga}
            alt="Olga"
            width={430}
            height={700}
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className={styles.natalia_conteiner}>
          <Image
            src={Natalia}
            alt="Natalia"
            width={526}
            height={745}
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
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
              className={styles.signature}
            />
          </div>
        </div>

        <Button onClick={handleClick} params={"service"} type={"button"} />
      </div>
    </section>
  );
}
