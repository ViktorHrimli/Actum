import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";

import styles from "./MilitaryMattrs.module.scss";

export default function MilitaryMattrs({openModalhalmet}) {
  return (
    <div className={styles.military}>
      <div onClick={openModalhalmet} className={styles.closed}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
        />
      </div>
      <h2 className={styles.military_title}>Військові питання</h2>

      <p className={styles.military_text}>
        Юристи Актуму – вузькоспеціалізовані військові адвокати для
        військовозобов’язаних, резервістів, УБД та військовослужбовців ЗСУ, НГУ,
        ДПСУ, СБУ та інших формувань. А також сімей військових.
      </p>
      <p className={styles.military_text}>
        Працюємо в галузі військового права з 2014 року. Правники Актуму мають
        досвід роботи у військовій прокуратурі та багату судову практику в
        галузі військового права.
      </p>
      <p className={styles.military_text}>
        Актуму можуть всебічно оцінити справу, надати змістовну консультацію і
        запропонувати шлях вирішення найскладнішого питання.
      </p>

      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        className={styles.military_icon}
      />
      <a href="/paid-priority-army">
        <Image
          src={Click}
          alt="Click"
          width={40}
          height={40}
          className={styles.criminal_icon_click}
        />
        </a>
    </div>
  );
}
