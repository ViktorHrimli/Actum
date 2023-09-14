"use client";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  useEffect,
  useState,
  useIsBig,
  usePathname,
  useIsSmall,
  useIsTabOrSmallLaptop,
} from "@/libs/hooks/hooks";

import Button from "../button/Button";

import {
  desktopAnimateWatemark,
  mobileAnimateWatemark,
  desktopTitleTextWatemark,
  desktopWatemarkLine,
  desktopWatemarkText,
  mobileTitleTextWatemark,
  mobileWatemarkLine,
  mobileWatemarkText,
  gradientVariants,
} from "./libs/enums/enums";

import femida from "@/assets/svg/HERO_FEMIDA.png";
import watemark from "@/assets/svg/Actum_HERO.png";

import styles from "./Hero.module.scss";

export default function Hero() {
  const [isStep, setIsStep] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [screenWidth, setscreenWidth] = useState(0);
  const [isLoad, setIsLoad] = useState(false);

  const isDesktop = useIsBig();
  const isMobile = useIsSmall();
  const isSmallLaptopOrTab = useIsTabOrSmallLaptop();
  const path = usePathname();

  const isHome = path === "/";

  const watemarkAnimated = isDesktop
    ? desktopAnimateWatemark
    : mobileAnimateWatemark;
  const titleWatemarkAnimated = isDesktop
    ? desktopTitleTextWatemark
    : mobileTitleTextWatemark;
  const watemarTextkAnimated = isDesktop
    ? desktopWatemarkText
    : mobileWatemarkText;
  const watemarkLineAnimated = isDesktop
    ? desktopWatemarkLine
    : mobileWatemarkLine;

  useEffect(() => {
    setIsClient(true);
    setscreenWidth(window.innerWidth);
    const scrollY = document.body.style.top;
    const hero = document.getElementById("hero_section");

    hero.style.overflowY = "hidden";
    document.body.style.position = "fixed";

    document.body.style.left = "50%";
    document.body.style.transform = "translateX(-50%)";

    document.body.style.overflow = "hidden";

    window.scrollTo(0, parseInt(scrollY || "0") * -1);

    setTimeout(() => setIsStep(true), 1500);
    setTimeout(() => setIsLoad(true), isDesktop ? 3200 : 2000);

    setTimeout(
      () => {
        hero.style.overflowY = "";

        document.body.style.overflow = "";
        document.body.style.height = "auto";
        document.body.style.left = "0%";
        document.body.style.transform = "";

        document.body.style.position = "initial";
        document.body.style.top = "";
      },
      isDesktop ? 4000 : 3500
    );
  }, []);

  return (
    <section className={styles.hero_section}>
      <div id="hero_section" className={styles.hero_conteiner}>
        {isClient && (
          <motion.div
            key={"watemark"}
            animate={isHome ? watemarkAnimated["animate"](isStep) : false}
            variants={isHome ? watemarkAnimated["variants"] : false}
            initial={
              isHome
                ? watemarkAnimated["initial"](isSmallLaptopOrTab, screenWidth)
                : false
            }
            transition={watemarkAnimated["transition"]}
            className={styles.conteiner_wordmark}
          >
            <Image
              src={watemark}
              alt="ACTUM"
              priority={true}
              placeholder="blur"
              fill
            />
          </motion.div>
        )}

        {isLoad && (
          <motion.div
            key={"femida"}
            className={styles.image_conteiner}
            animate={"open"}
            variants={{ open: { x: 0, opacity: 1 } }}
            initial={{ x: screenWidth / 2, opacity: 0 }}
            transition={{
              type: "keyframes",
              ease: "easeInOut",
              duration: isDesktop ? 1.2 : 1,
              delay: 0.1,
            }}
          >
            <Image src={femida} alt="Femida" priority={true} fill />
          </motion.div>
        )}

        {/* GRADIENTS */}
        {isLoad && (
          <motion.div
            key={"main_gradient"}
            className={styles.main_gradient}
            animate={gradientVariants["animate"]}
            variants={gradientVariants["variants"]}
            initial={gradientVariants["initial"]}
            transition={gradientVariants["transition"](isDesktop)}
          ></motion.div>
        )}

        {isLoad && (
          <motion.div
            key={"second_gradient"}
            animate={gradientVariants["animate"]}
            variants={gradientVariants["variants"]}
            initial={gradientVariants["initial"]}
            transition={gradientVariants["transition"](isDesktop)}
            className={styles.second_gradient}
          ></motion.div>
        )}

        {isLoad && (
          <motion.div
            key={"thirhd_gradient"}
            animate={gradientVariants["animate"]}
            variants={gradientVariants["variants"]}
            initial={gradientVariants["initial"]}
            transition={gradientVariants["transition"](isDesktop)}
            className={styles.thirhd_gradient}
          ></motion.div>
        )}

        {isLoad && (
          <motion.div
            key={"fourth_gradient"}
            animate={gradientVariants["animate"]}
            variants={gradientVariants["variants"]}
            initial={gradientVariants["initial"]}
            transition={gradientVariants["transition"](isDesktop)}
            className={styles.fourth_gradient}
          ></motion.div>
        )}

        {/* GRADIENT END */}
        {isClient ? (
          <motion.h2
            key={"title_text"}
            animate={isHome ? titleWatemarkAnimated["animate"](isStep) : false}
            variants={titleWatemarkAnimated["variants"]}
            initial={
              isHome ? titleWatemarkAnimated["initial"](screenWidth) : false
            }
            transition={titleWatemarkAnimated["transition"]}
            className={styles.title_text}
          >
            Адвокатське об’Єднання
          </motion.h2>
        ) : (
          <div style={{ height: "90px" }}></div>
        )}

        {isLoad ? (
          <motion.div
            key={"under_line"}
            animate={isHome ? watemarkLineAnimated["animate"] : false}
            variants={watemarkLineAnimated["variants"]}
            initial={
              isHome ? watemarkLineAnimated["initial"](screenWidth) : false
            }
            transition={watemarkLineAnimated["transition"]}
            className={styles.under_line}
          ></motion.div>
        ) : (
          <div style={{ height: "21px" }}></div>
        )}
        {isLoad ? (
          <motion.div
            key={"text"}
            animate={isHome ? watemarTextkAnimated["animate"] : false}
            variants={watemarTextkAnimated["variants"]}
            initial={
              isHome ? watemarTextkAnimated["initial"](screenWidth) : false
            }
            transition={watemarTextkAnimated["transition"]}
            className={styles.text}
          >
            Дія задля результату
          </motion.div>
        ) : (
          <div style={{ height: "400px" }}></div>
        )}

        {isLoad && (
          <motion.div
            animate={"open"}
            key={"btn_wrapper"}
            variants={{ open: { y: "0", opacity: 1 } }}
            initial={{ y: "90px", opacity: 0 }}
            transition={{
              ease: "easeInOut",
              type: "keyframes",
              duration: isDesktop ? 1.2 : 1,
              delay: isDesktop ? 0.3 : 0.3,
            }}
            className={styles.btn_wrapper}
          >
            <Link href={"/book"}>
              <Button
                onClick={() => {}}
                type={"button"}
                text="замовити консультацію"
                style="button_prymary"
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
