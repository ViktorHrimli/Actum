import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";

import styles from "./CriminalMattrs.module.scss";

export default function CriminalMattrs({openModalCriminal}) {
  return (
    <div className={styles.criminal}>
      <div onClick={openModalCriminal} style={{ cursor: "pointer", position: "absolute", right: "40px", top: "40px"}}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
        />
      </div>
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
        loading="lazy"
        className={styles.criminal_icon}
      />
      <Image
        src={Click}
        alt="Click"
        width={40}
        loading="lazy"
        height={40}
        className={styles.criminal_icon_click}
      />
    </div>
  );
}
