"use client";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence, transform } from "framer-motion";

import Navigation from "@/libs/components/nav/Navigation";
import BtnSideBar from "@/libs/components/btn_side_bar/BtnSideBar";

import {
  PathsPageHeader,
  desktopLogoAnimate,
  mobileLogoAnimate,
} from "./enums/enum";

import {
  usePathname,
  useCallback,
  useState,
  useEffect,
  useIsBig,
} from "@/libs/hooks/hooks";

import Logo from "@/assets/svg/LOGO.png";

import styles from "./Header.module.scss";
import SideBar from "../side_bar/SideBar";

export default function Header() {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isStep, setIsStep] = useState(false);

  const path = usePathname();

  const isDesktopOrLaptop = useIsBig();

  useEffect(() => {
    if (isSideBar) {
      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isSideBar]);

  useEffect(() => {
    setIsClient(true);

    setTimeout(() => setIsStep(true), 2000);
  }, []);

  const logoAnimated = isDesktopOrLaptop
    ? desktopLogoAnimate
    : mobileLogoAnimate;

  const handleClickOnBar = useCallback(
    () => setIsSideBar(!isSideBar),
    [isSideBar]
  );

  return (
    <section className={styles.header_section}>
      <div className={styles.header_conteiner}>
        {isClient && (
          <motion.div
            className={styles.logo_conteiner}
            animate={isStep ? "start" : "step"}
            variants={logoAnimated["variants"]}
            initial={logoAnimated["initial"]}
            transition={logoAnimated["transition"]}
          >
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" fill priority={true} />
            </Link>
          </motion.div>
        )}
        {isDesktopOrLaptop && isClient ? (
          <motion.div
            animate={"open"}
            variants={{
              open: { x: 0, y: 0, opacity: 1 },
            }}
            initial={{ x: 0, y: 50, opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.8, delay: 3 }}
          >
            <Navigation links={PathsPageHeader} route={path} />
          </motion.div>
        ) : (
          <BtnSideBar isBarSide={isSideBar} onClick={handleClickOnBar} />
        )}
      </div>

      <AnimatePresence>
        {isSideBar && (
          <motion.div
            animate={isSideBar ? "open" : "closed"}
            variants={{ open: { x: 0, y: 0, opacity: 1 } }}
            initial={{ x: "100%", y: "0" }}
            exit={{ x: "100%", duration: 0.5 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            style={{
              top: 0,
              left: 0,
              overflow: "hidden",
              width: "100vw",
              height: "100vh",
              position: "absolute",
              zIndex: "20",
              background: "#0F021C",
            }}
          >
            <SideBar>
              <Navigation
                links={PathsPageHeader}
                route={path}
                onClick={handleClickOnBar}
              />
            </SideBar>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
