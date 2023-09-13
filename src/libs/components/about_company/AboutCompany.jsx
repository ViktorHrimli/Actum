import Image from "next/image";

import styles from "./AboutCompany.module.scss";
import gradient from "./AboutGradients.module.scss";

import Animation from "./halpers/Animation";
import animationSignOlena from '@/assets/json/sign_olena.json'
import animationSignNatalia from '@/assets/json/sign_natalia.json'


// import XO from "@/assets/svg/XO.png";
// import XN from "@/assets/svg/XN.png";
import Ukraine from "@/assets/svg/Ukraine.png";

import Olga from "@/assets/svg/Olga.png";
import Natalia from "@/assets/svg/Natalia.png";

import Button from "../button/Button";
import Link from "next/link";

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
          </p>
        </div>
        <div className={styles.ukraine_map}>
          <Image src={Ukraine} alt="Ukraine" fill loading="lazy" />
        </div>
        {/* GRADIENTS */}
        <div className={gradient.main_gradient}></div>
        <div className={gradient.second_gradient}></div>
        <div className={gradient.text_gradient}></div>
        <div className={gradient.partner_gradient}></div>

        {/* PHOTO */}
        <div className={styles.olga_conteiner}>
          <Image
            src={Olga}
            alt="Olga"
            fill
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className={styles.natalia_conteiner}>
          <Image
            src={Natalia}
            alt="Natalia"
            fill
            loading="eager"
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
        <p className={styles.text_adaptive_display}>
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

        <div className={styles.wrapper_signatur}>
          <div className={styles.conteiner_partner_olena}>
            <p className={styles.partner}>партнер Хоменко Олена</p>
            <div className={styles.wrapper_signatur_olena}>
          <Animation animationData={animationSignOlena} playOnScroll={true} />
            </div>
          </div>
          <div className={styles.conteiner_partner_natalia}>
            <p className={styles.partner}>партнер Коровіна Наталя</p>
            <div className={styles.wrapper_signatur_natalia}>
          <Animation animationData={animationSignNatalia} playOnScroll={true} />
            </div>
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <Link href={"/teamactum"}>
            <Button
              onClick={handleClick}
              style={"button_prymary"}
              text={"наша команда"}
              type={"button"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
