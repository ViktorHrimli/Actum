import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";
import styles from "./FamilyMattrs.module.scss";

export default function FamilyMattrs({openModalHands}) {
  return (
    <div className={styles.family}>
      <div onClick={openModalHands} style={{ cursor: "pointer", position: "absolute", right: "40px", top: "40px"}}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
        />
      </div>
      <h2 className={styles.family_title}>сімейні питання</h2>

      <p className={styles.family_text}>
        Наші правознавці з 2004 року успішно ведуть справи, що стосуються
        сімейних правовідносин, поділу майна, оформлення і вступу в спадщину.
      </p>
      <p className={styles.family_text}>
        З огляду на особливу конфліктність цієї категорії справ, ми пропонуємо{" "}
        <span className={styles.family_text_bold}>індивідуальні стратегії</span>{" "}
        розв’язання спорів, коли клієнт отримує від нас комплексну допомогу –
        адвокатську, психологічну тощо.
      </p>
      <p className={styles.family_text}>
        Спеціалізуємось на сімейних спорах особливої складності: позбавлення
        батьківських прав, розірвання шлюбів в іноземних юрисдикціях з поділом
        майна, визнання недійсним заповітів та шлюбних контрактів.
      </p>

      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        loading="lazy"
        className={styles.family_icon}
      />

      <Image
        src={Click}
        alt="Click"
        width={40}
        height={40}
        loading="lazy"
        className={styles.family_icon_click}
      />
    </div>
  );
}
