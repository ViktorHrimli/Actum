"use client";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import Navigation from "@/libs/components/nav/Navigation";
import BtnSideBar from "@/libs/components/btn_side_bar/BtnSideBar";
import SideBar from "@/libs/components/side_bar//SideBar";

import {
  PathsPageHeader,
  desktopLogoAnimate,
  mobileLogoAnimate,
} from "./enums/enum";

import { gradientEnums } from "./enums/gradientEnums";

import {
  usePathname,
  useCallback,
  useState,
  useEffect,
  useIsBig,
  useIsTab,
} from "@/libs/hooks/hooks";

import Logo from "@/assets/svg/LOGO.png";

import styles from "./Header.module.scss";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isStep, setIsStep] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [isScreenHeight, setIsScreenHeight] = useState(false);

  // DROP MENU
  const [onHover, setOnHover] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isStyleHeader, setIsStyleHeader] = useState(null);

  const path = usePathname();

  // SCREEN
  const isDesktopOrLaptop = useIsBig();
  const isTab = useIsTab();

  const patnName = path.replace("/", "");

  let isSessionStorageSave;

  if (typeof window !== "undefined") {
    isSessionStorageSave = JSON.parse(
      sessionStorage.getItem("hero_heder") || true
    );
  }

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("hero_heder", "false");
    }, 3000);
  }, []);

  useEffect(() => {
    if (gradientEnums[patnName]) {
      setIsStyleHeader(gradientEnums[patnName]);
    } else {
      setIsStyleHeader(null);
    }
  }, [patnName]);

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

    setIsScreenHeight(Boolean(window?.innerHeight > 798));

    setTimeout(() => setIsStep(true), 1200);
  }, []);

  const handleClickOnBar = useCallback(() => {
    setIsSideBar(!isSideBar);
    setIsOpenMenu(false);
    setOnHover(false);
  }, [isSideBar, isOpenMenu, onHover]);

  const handleClickOnMenu = useCallback(() => {
    setIsOpenMenu(false);
    setOnHover(false);
  }, [isOpenMenu, onHover]);

  const logoAnimated = isDesktopOrLaptop
    ? desktopLogoAnimate
    : mobileLogoAnimate;

  return (
    <section className={styles.header_section}>
      <div className={styles.header_conteiner} id="header">
        {isClient && (
          <Link href={"/"}>
            <motion.div
              className={styles.logo_conteiner}
              animate={
                isSessionStorageSave ? logoAnimated["animate"](isStep) : false
              }
              variants={logoAnimated["variants"](isScreenHeight)}
              initial={
                isSessionStorageSave
                  ? logoAnimated["initial"](window?.innerHeight > 798)
                  : false
              }
              transition={logoAnimated["transition"]}
            >
              <Image
                src={Logo}
                alt="Logo ACTUM"
                fill
                priority={true}
                loading="eager"
                sizes="(max-width: 768px) 40px, 100px"
              />
            </motion.div>
          </Link>
        )}

        {isDesktopOrLaptop && isClient ? (
          <motion.div
            animate={isSessionStorageSave ? "open" : false}
            variants={{
              open: { x: 0, y: 0, opacity: 1 },
            }}
            initial={isSessionStorageSave ? { x: 0, y: 50, opacity: 0 } : false}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <Navigation
              links={PathsPageHeader}
              route={path}
              onClick={handleClickOnMenu}
              onHover={onHover}
              isMobile={isTab}
              setOnHover={setOnHover}
              setIsOpenMenu={setIsOpenMenu}
              isOpenMenu={isOpenMenu}
            />
          </motion.div>
        ) : (
          <BtnSideBar isBarSide={isSideBar} onClick={handleClickOnBar} />
        )}
      </div>

      <AnimatePresence>
        {isSideBar && (
          <motion.div
            animate={isSideBar ? "open" : "closed"}
            variants={{ open: { x: 0, opacity: 1 } }}
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 1 }}
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
            <SideBar isStyleHeader={isStyleHeader}>
              <Navigation
                links={PathsPageHeader}
                route={path}
                onClick={handleClickOnBar}
                onHover={onHover}
                isMobile={isTab}
                setOnHover={setOnHover}
                setIsOpenMenu={setIsOpenMenu}
                isOpenMenu={isOpenMenu}
              />
            </SideBar>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
