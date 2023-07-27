"use client";
import Image from "next/image";

import LinkedPath from "@/assets/svg/Linked-Path.png";


import styles from "./FamilyMattrs.module.scss";



export default function FamilyMattrs() { 
  return <div className={styles.family}>

    <h2 className={styles.family_title}>сімейні питання</h2>
    
    <p className={styles.family_text}>Наші правознавці з 2004 року успішно ведуть справи, що стосуються сімейних правовідносин, поділу майна, оформлення і вступу в спадщину.</p>
    <p className={styles.family_text}>З огляду на особливу конфліктність цієї категорії справ, ми пропонуємо <span className={styles.family_text_bold}>індивідуальні стратегії</span> розв’язання спорів, коли клієнт отримує від нас комплексну допомогу – адвокатську, психологічну тощо.</p>
    <p className={styles.family_text}>Спеціалізуємось на сімейних спорах особливої складності: позбавлення батьківських прав, розірвання шлюбів в іноземних юрисдикціях з поділом майна, визнання недійсним заповітів та шлюбних контрактів.</p>
    
    <Image src={LinkedPath} alt="Linked" width={180} height={180} className={styles.family_icon}/>

    </div>
}