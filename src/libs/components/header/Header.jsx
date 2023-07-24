"use client";
import Image from "next/image";

import Navigation from "@/libs/components/nav/Navigation";

import { PathsPageHeader } from "./enums/enum";
import { usePathname } from "@/libs/hooks/hooks";

import Logo from "@/assets/svg/LOGO.png";

import styles from "./Header.module.scss";

export default function Header() {
  const path = usePathname();

  return (
    <section className={styles.header_section}>
      <div className={styles.header_conteiner}>
        <Image src={Logo} alt="Logo" width={40} height={37} />

        <div className={styles.nav_conteiner}>
          <Navigation links={PathsPageHeader} route={path} />
        </div>
      </div>
    </section>
  );
}
