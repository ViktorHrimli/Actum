import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";
import styles from "./FamilyMattrs.module.scss";

export default function FamilyMattrs({ openModalHands, title, description }) {
  return (
    <div className={styles.family}>
      <div onClick={openModalHands} className={styles.closed}>
        <FontAwesomeIcon icon={faXmark} size="2xl" />
      </div>
      <h2 className={styles.family_title}>{title}</h2>

      <div
        className={styles.family_text}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        loading="lazy"
        className={styles.family_icon}
      />
      <a href="/paid-priority-family">
        <Image
          src={Click}
          alt="Click"
          width={40}
          height={40}
          loading="lazy"
          style={{ zIndex: 5 }}
          className={styles.family_icon_click}
        />
      </a>
    </div>
  );
}
