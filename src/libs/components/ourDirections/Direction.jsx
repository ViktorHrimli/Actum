"use client";
import Image from "next/image";


import styles from "./Direction.module.scss";

import FamilyMattrs from "./familyMatters/FamilyMattrs";
import MilitaryMattrs from "./militaryMatters/MilitaryMattrs";
import CriminalMattrs from "./criminalMatters/CriminalMattrs";

import Touch_icon from "@/assets/svg/Touch_icon.png";

import Hands from "@/assets/svg/Hands.png";
import Helmet from "@/assets/svg/Helmet.png";
import Criminal from "@/assets/svg/Criminal.png";


export default function Direction() {
  return <section className={styles.direction_section}>
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

          <div className={styles.img_hands}>
            <Image src={Touch_icon} alt="Touch" width={40} height={40} className={styles.touch_icon} />
            <Image src={Hands} alt="Hands" width={492} height={518} className={styles.img} />
          </div>
          <div className={styles.img_halmet}>
            <Image src={Helmet} alt="Helmet" width={916} height={649} className={styles.img} />
          </div>
          <div className={styles.img_criminal}>
            <Image src={Criminal} alt="Criminal" width={492} height={518} className={styles.img} />
          </div> 
          
          <div className={styles.block_hover_hands_background}></div>
          <div className={styles.block_hover_criminal_background}></div>
          
        </div>

        <div className={styles.box_btn}>
          <button className={styles.direction_btn}>усі послуги</button>
        </div>
      </div>
    </div>
  </section>
}
