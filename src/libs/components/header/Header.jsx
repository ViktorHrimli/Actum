"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Navigation from "@/libs/components/nav/Navigation";
import BtnSideBar from "@/libs/components/btn_side_bar/BtnSideBar";

import { PathsPageHeader } from "./enums/enum";
import {
  usePathname,
  useMediaQuery,
  useCallback,
  useState,
} from "@/libs/hooks/hooks";

import Logo from "@/assets/svg/LOGO.png";

import styles from "./Header.module.scss";
import SideBar from "../side_bar/SideBar";

const variants = {
  open: { x: "-40px", y: "-53px" },
  closed: { x: "100%", y: 0 },
};

export default function Header() {
  const [isSideBar, setIsSideBar] = useState(false);
  const path = usePathname();

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });

  const handleClickOnBar = useCallback(() => setIsSideBar(!isSideBar));

  return (
    <section className={styles.header_section}>
      <div className={styles.header_conteiner}>
        <div className={styles.logo_conteiner}>
          <Image src={Logo} alt="Logo" fill priority={true} />
        </div>

        {isDesktopOrLaptop && (
          <Navigation links={PathsPageHeader} route={path} />
        )}
        {isTabletOrMobile && (
          <BtnSideBar isBarSide={isSideBar} onClick={handleClickOnBar} />
        )}
      </div>

      {isSideBar && (
        <motion.div
          animate={isSideBar ? "open" : "closed"}
          variants={variants}
          initial={{ x: "100%", y: "0" }}
          transition={{ ease: "easeInOut" }}
        >
          <SideBar onClick={handleClickOnBar} isBarSide={isSideBar} />
        </motion.div>
      )}
    </section>
  );
}
