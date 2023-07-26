import Image from "next/image";

import Button from "../button/Button";

import watemark from "@/assets/svg/Actum_HERO.png";
import femida from "@/assets/svg/HERO_FEMIDA.png";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero_conteiner}>
      <div className={styles.conteiner_wordmark}>
        <Image src={watemark} alt="ACTUM" width={700} height={120.61} />
      </div>

      <div className={styles.image_conteiner}>
        <Image
          src={femida}
          alt="Femida"
          width={1303}
          height={848}
          priority
          placeholder="blur"
        />
      </div>
      <h2 className={styles.title_text}>Адвокатське об’Єднання</h2>
      <div className={styles.under_line}></div>
      <div className={styles.text}>Дія задля результату</div>
      {/* GRADIENTS */}
      <div className={styles.main_gradient}></div>
      <div className={styles.second_gradient}></div>
      <div className={styles.thirhd_gradient}></div>
      <div className={styles.fourth_gradient}></div>

      <Button onClick={() => {}} type={"button"} params={"consult"} />
    </div>
  );
}
