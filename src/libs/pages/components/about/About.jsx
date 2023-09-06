import Image from "next/image";

import Button from "@/libs/components/button/Button";

import marks from "@/assets/svg/marks.svg";

import styles from "./About.module.scss";

export default function About({ img, type = "family" }) {
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
            src={img}
            loading="lazy"
            placeholder="blur"
            alt="natalia"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "4px",
            }}
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
    </section>
  );
}
