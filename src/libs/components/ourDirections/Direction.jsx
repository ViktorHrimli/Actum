import Image from "next/image";

import styles from "./Direction.module.scss";

import FamilyMattrs from "@/libs/components/ourDirections/familyMatters/FamilyMattrs";
import MilitaryMattrs from "@/libs/components/ourDirections/militaryMatters/MilitaryMattrs";
import CriminalMattrs from "@/libs/components/ourDirections/criminalMatters/CriminalMattrs";

import Touch_icon from "@/assets/svg/Touch_icon.png";

export default function Direction() {
  return (
    <section className={styles.direction_section}>
      <div className={styles.direction_container}>
        <div className={styles.box_title}>
          <div className={styles.direction_line}></div>
          <h2 className={styles.direction_title}>наші напрями</h2>
          <div className={styles.direction_line}></div>
        </div>

        <div className={styles.flex_position}>
          <div className={styles.box_img}>
            <div className={styles.hover_hands}>
              <div className={styles.block_hover_hands}></div>
              <div className={styles.modal_family}>
                <FamilyMattrs />
              </div>
            </div>

            <div className={styles.hover_halmet}>
              <div className={styles.block_hover_halmet}></div>
              <div className={styles.modal_military}>
                <MilitaryMattrs />
              </div>
            </div>

            <div className={styles.hover_criminal}>
              <div className={styles.block_hover_criminal}></div>
              <div className={styles.modal_criminal}>
                <CriminalMattrs />
              </div>
            </div>

            <span className={styles.img_hands}>
              <Image
                src={Touch_icon}
                alt="Touch"
                width={40}
                height={40}
                className={styles.touch_icon}
              />
            </span>
            <span className={styles.img_halmet}></span>
            <span className={styles.img_criminal}></span>

            <div className={styles.block_hover_hands_background}></div>
            <div className={styles.block_hover_criminal_background}></div>
          </div>

          <div className={styles.box_btn}>
            <button className={styles.direction_btn}>усі послуги</button>
          </div>
        </div>
      </div>
    </section>
  );
}
