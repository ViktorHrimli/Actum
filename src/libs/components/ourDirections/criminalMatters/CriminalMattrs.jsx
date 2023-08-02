import Image from "next/image";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";


import styles from "./CriminalMattrs.module.scss";


export default function CriminalMattrs() {
  return (
    <div className={styles.criminal}>
      <h2 className={styles.criminal_title}>кримінальні питання</h2>

      <p className={styles.criminal_text}>
        Кримінальні адвокати Актуму, спеціалісти з досвідом роботи у
        прокуратурі, знаходять вади у доказах слідства та формують доказову базу
        на користь клієнта.
      </p>
      <p className={styles.criminal_text}>
        Досконале знання судової практики по окремим категоріям справ дозволяє
        правникам Актуму знайти підстави для перекваліфікації складу злочину на
        менш тяжку статтю КК, а нерідко – взагалі для закриття справи.
      </p>
      <p className={styles.criminal_text}>
        Наші спеціалісти здатні проконтролювати дотримання стандартів утримання
        в СІЗО та містах позбавлення волі. Маємо сильну експертизу у справах по
        наркотиках, ДТП з тяжкими наслідками, службовій діяльності.
      </p>

      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        className={styles.criminal_icon}
      />
      <Image
        src={Click}
        alt="Click"
        width={40}
        height={40}
        className={styles.criminal_icon_click}
      />
    </div>
  );
}
