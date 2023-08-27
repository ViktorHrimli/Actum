"use client";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import Navigation from "@/libs/components/nav/Navigation";
import BtnSideBar from "@/libs/components/btn_side_bar/BtnSideBar";

import { PathsPageHeader } from "./enums/enum";
import {
  usePathname,
  useMediaQuery,
  useCallback,
  useState,
  useEffect,
} from "@/libs/hooks/hooks";

import Logo from "@/assets/svg/LOGO.png";

import styles from "./Header.module.scss";
import SideBar from "../side_bar/SideBar";

export default function Header() {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isStep, setIsStep] = useState(false);
  const path = usePathname();

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

  const variants = {
    open: { x: 0, y: 0, opacity: 1 },
  };

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });

  const handleClickOnBar = useCallback(
    () => setIsSideBar(!isSideBar),
    [isSideBar]
  );

  return (
    <section className={styles.header_section}>
      <div className={styles.header_conteiner}>
        <motion.div
          className={styles.logo_conteiner}
          animate={isStep ? "start" : "step"}
          variants={{
            start: { x: "0", y: "0", scale: 1, rotate: "0deg" },
            step: { x: "100px", y: "255px", scale: 4, rotate: "0deg" },
          }}
          initial={{ x: "600px", y: "298px", scale: 5, rotate: "90deg" }}
          exit={{ x: "0", y: "0", scale: 1, rotate: "0deg" }}
          transition={{ ease: "easeIn", duration: 0.8, delay: 1 }}
        >
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" fill priority={true} />
          </Link>
        </motion.div>

        {isDesktopOrLaptop && isClient ? (
          <motion.div
            animate={"open"}
            variants={{
              open: { x: "0", y: "0", opacity: 1 },
            }}
            initial={{ x: "0px", y: "-50px", opacity: 0 }}
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
            variants={variants}
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
