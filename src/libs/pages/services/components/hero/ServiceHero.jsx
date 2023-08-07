import Image from "next/image";

import styles from "./ServiceHero.module.scss";

import Button from "@/libs/components/button/Button";

import service_back_photo from "@/assets/svg/service_back_photo.png";
import watemark from "@/assets/svg/Actum_HERO.png";

export default function ServiceHero() {
  return (
    <section className={styles.section}>
      <Image
        src={service_back_photo}
        alt="bacground photo"
        fill
        priority={true}
        style={{ zIndex: -1, objectFit: 'cover' }}
      />

      <div className={styles.conteiner_hero_watemark}>
        <div className={styles.title_wotemark}>
          <Image src={watemark} alt="ACTUM" fill loading="eager" />
        </div>
        <h2 className={styles.title_text}>наші послуги</h2>
      </div>

      <div className={styles.wrapper_btn}>
        <Button
          onClick={() => {}}
          type={"button"}
          text="замовити консультацію"
          style="button_prymary"
        />
      </div>

      <div className={styles.section_background}></div>
    </section>
  );
}
