import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LinkedPath from "@/assets/svg/Detail_icon.png";
import Click from "@/assets/svg/Klick_icon.png";

import styles from "./MilitaryMattrs.module.scss";
import Link from "next/link";

export default function MilitaryMattrs({
  openModalhalmet,
  title,
  description,
  link,
}) {
  return (
    <div className={styles.military}>
      <div onClick={openModalhalmet} className={styles.closed}>
        <FontAwesomeIcon icon={faXmark} size="2xl" />
      </div>
      <h2 className={styles.military_title}>{title}</h2>

      <div
        className={styles.military_text}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        className={styles.military_icon}
      />
      <Link href={link}>
        <Image
          src={Click}
          alt="Click"
          width={40}
          height={40}
          className={styles.criminal_icon_click}
        />
      </Link>
    </div>
  );
}
