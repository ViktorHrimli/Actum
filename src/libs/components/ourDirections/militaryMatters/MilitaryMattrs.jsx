"use client";
import Image from "next/image";

import LinkedPath from "@/assets/svg/Linked-Path.png";


import styles from "./MilitaryMattrs.module.scss";



export default function MilitaryMattrs() { 
  return <div className={styles.military}>

    <h2 className={styles.military_title}>Військові питання</h2>
    
    <p className={styles.military_text}>Юристи Актуму – вузькоспеціалізовані військові адвокати для військовозобов’язаних, резервістів, УБД та військовослужбовців ЗСУ, НГУ, ДПСУ, СБУ та інших формувань. А також сімей військових.</p>
    <p className={styles.military_text}>Працюємо в галузі військового права з 2014 року. Правники Актуму мають досвід роботи у військовій прокуратурі та багату судову практику в галузі військового права.</p>
    <p className={styles.military_text}>Актуму можуть всебічно оцінити справу, надати змістовну консультацію і запропонувати шлях вирішення найскладнішого питання.</p>
    
    <Image src={LinkedPath} alt="Linked" width={180} height={180} className={styles.military_icon}/>

    </div>
}