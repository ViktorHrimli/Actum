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
        <div className={styles.logo_conteiner}>
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" fill priority={true} />
          </Link>
        </div>

        {isDesktopOrLaptop && isClient ? (
          <Navigation links={PathsPageHeader} route={path} />
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
