"use client";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import Navigation from "@/libs/components/nav/Navigation";
import BtnSideBar from "@/libs/components/btn_side_bar/BtnSideBar";
import SideBar from "@/libs/components/side_bar//SideBar";

import { desktopLogoAnimate, mobileLogoAnimate } from "./enums/enum";
import { storage } from "@/shared/helpers/helpers";
// import { gradientEnums } from "./enums/gradientEnums";

import {
  usePathname,
  useCallback,
  useState,
  useEffect,
  useIsBig,
  useIsTab,
  useClient,
  useSearchParams,
} from "@/shared/hooks/hooks";

import styles from "./Header.module.scss";

export default function Header({ ru, uk, ruForm, uaForm }) {
  const {
    data: {
      attributes: { Header: ruHeaders, Navigation: ruService_page },
    },
  } = ru;

  const {
    data: {
      attributes: { Header: uaHeaders, Navigation: uaService_page },
    },
  } = uk;

  const [isStep, setIsStep] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [isScreenHeight, setIsScreenHeight] = useState(false);
  // LOCALE
  const [isLocal, setIsLocal] = useState("");
  // DROP MENU
  const [onHover, setOnHover] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isStyleHeader, setIsStyleHeader] = useState(null);
  // SCREEN
  const isDesktopOrLaptop = useIsBig();
  const isTab = useIsTab();

  const path = usePathname();
  const patnName = path.replace("/", "");
  const searchParams = useSearchParams();
  const isClient = useClient();

  const logoAnimated = isDesktopOrLaptop
    ? desktopLogoAnimate
    : mobileLogoAnimate;

  let isSessionStorageSave;
  const isHoome = path === "/" || path === "/ru";

  if (typeof window !== "undefined") {
    isSessionStorageSave = JSON.parse(
      sessionStorage.getItem("hero_heder") || true
    );
  }

  const handleClickOnBar = useCallback(() => {
    setIsSideBar(!isSideBar);
    setIsOpenMenu(false);
    setOnHover(false);
  }, [isSideBar]);

  const handleClickOnMenu = useCallback(() => {
    setIsOpenMenu(false);
    setOnHover(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("hero_heder", "false");
    }, 3000);

    return () => storage.generateUserInfo(searchParams);
  }, []);

  useEffect(() => {
    storage.getUtm();
    if (patnName.includes("ru")) {
      setIsLocal(localStorage.getItem("locale") || "");
    } else {
      setIsLocal("");
    }

    // if (gradientEnums[patnName]) {
    //   setIsStyleHeader(gradientEnums[patnName]);
    // } else {
    //   setIsStyleHeader(null);
    // }
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
    setIsScreenHeight(Boolean(window?.innerHeight > 798));

    setTimeout(() => setIsStep(true), 1200);

    setIsLocal(localStorage.getItem("locale") || "");
  }, []);

  return (
    <section className={styles.header_section}>
      <div className={styles.header_conteiner} id="header">
        {isClient && (
          <Link
            href={isLocal ? `/ru` : "/"}
            rel="alternate"
            hrefLang={isLocal ? "ru" : "uk"}
          >
            <motion.div
              className={styles.logo_conteiner}
              animate={
                isHoome
                  ? isSessionStorageSave
                    ? logoAnimated["animate"](isStep)
                    : false
                  : false
              }
              // animate={
              //   isSessionStorageSave ? logoAnimated["animate"](isStep) : false
              // }
              variants={logoAnimated["variants"](isScreenHeight)}
              // initial={
              //   isSessionStorageSave
              //     ? logoAnimated["initial"](window?.innerHeight > 798)
              //     : false
              // }
              initial={
                isHoome
                  ? isSessionStorageSave
                    ? logoAnimated["initial"](window?.innerHeight > 798)
                    : false
                  : false
              }
              transition={logoAnimated["transition"]}
            >
              <Image
                src={uaHeaders["LOGO"]["data"]["attributes"]["url"]}
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
            // animate={isSessionStorageSave ? "open" : false}
            animate={isHoome ? (isSessionStorageSave ? "open" : false) : false}
            variants={{
              open: { x: 0, y: 0, opacity: 1 },
            }}
            // initial={isSessionStorageSave ? { x: 0, y: 50, opacity: 0 } : false}
            initial={
              isHoome
                ? isSessionStorageSave
                  ? { x: 0, y: 50, opacity: 0 }
                  : false
                : false
            }
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <Navigation
              nav={isLocal ? ruHeaders["Navigation"] : uaHeaders["Navigation"]}
              servicesRoute={isLocal ? ruService_page : uaService_page}
              route={path}
              onClick={handleClickOnMenu}
              onHover={onHover}
              isMobile={isTab}
              setOnHover={setOnHover}
              setIsOpenMenu={setIsOpenMenu}
              isOpenMenu={isOpenMenu}
              isLocal={isLocal}
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
            <SideBar
              isStyleHeader={isStyleHeader}
              ruForm={ruForm}
              uaForm={uaForm}
            >
              <Navigation
                nav={
                  isLocal ? ruHeaders["Navigation"] : uaHeaders["Navigation"]
                }
                servicesRoute={isLocal ? ruService_page : uaService_page}
                route={path}
                onClick={handleClickOnBar}
                setOnHover={setOnHover}
                setIsOpenMenu={setIsOpenMenu}
                isLocal={isLocal}
                onHover={onHover}
                isMobile={isTab}
                isOpenMenu={isOpenMenu}
              />
            </SideBar>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
