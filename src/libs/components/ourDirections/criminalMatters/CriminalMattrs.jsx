import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";

import styles from "./CriminalMattrs.module.scss";

export default function CriminalMattrs({
  openModalCriminal,
  title,
  first_text,
  second_text,
  third_text,
}) {
  return (
    <div className={styles.criminal}>
      <div onClick={openModalCriminal} className={styles.closed}>
        <FontAwesomeIcon icon={faXmark} size="2xl" />
      </div>
      <h2 className={styles.criminal_title}>{title}</h2>

      <p className={styles.criminal_text}>{first_text}</p>
      <p className={styles.criminal_text}>{second_text}</p>
      <p className={styles.criminal_text}>{third_text}</p>

      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        loading="lazy"
        className={styles.criminal_icon}
      />
      <a href="/paid-priority-crime">
        <Image
          src={Click}
          alt="Click"
          width={40}
          loading="lazy"
          height={40}
          className={styles.criminal_icon_click}
        />
      </a>
    </div>
  );
}
