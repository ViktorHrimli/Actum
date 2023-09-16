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

let IS_FIRST_RENDER = true;

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
    if (IS_FIRST_RENDER) {
      hero.style.overflowY = "hidden";
      document.body.style.position = "fixed";

      document.body.style.left = "50%";
      document.body.style.transform = "translateX(-50%)";

      document.body.style.overflow = "hidden";

      window.scrollTo(0, parseInt(scrollY || "0") * -1);

      setTimeout(() => setIsStep(true), 1500);
      setTimeout(() => setIsLoad(true), isDesktop ? 3000 : 2000);
    }

    setTimeout(
      () => {
        hero.style.overflowY = "";
        document.body.style.overflow = "";
        document.body.style.height = "auto";
        document.body.style.left = "0%";
        document.body.style.transform = "";

        document.body.style.position = "initial";
        document.body.style.top = "";

        IS_FIRST_RENDER = false;
      },
      isDesktop ? 4000 : 3500
    );
  }, []);

  return (
    <section className={styles.hero_section}>
      <div id="hero_section" className={styles.hero_conteiner}>
        <motion.div
          key={"watemark"}
          animate={
            IS_FIRST_RENDER ? watemarkAnimated["animate"](isStep) : false
          }
          variants={watemarkAnimated["variants"]}
          initial={
            IS_FIRST_RENDER
              ? watemarkAnimated["initial"](isSmallLaptopOrTab, screenWidth)
              : false
          }
          transition={watemarkAnimated["transition"]}
          className={styles.conteiner_wordmark}
        >
          {isClient && (
            <Image
              src={watemark}
              alt="ACTUM"
              fetchPriority="high"
              priority={true}
              placeholder="blur"
              objectFit="cover"
              fill
            />
          )}
        </motion.div>

        <motion.div
          key={"femida"}
          className={styles.image_conteiner}
          animate={IS_FIRST_RENDER ? "open" : false}
          variants={{ open: { x: 0, opacity: 1 } }}
          initial={
            IS_FIRST_RENDER ? { x: isDesktop ? 600 : 250, opacity: 0 } : false
          }
          transition={{
            type: "keyframes",
            ease: "easeInOut",
            duration: isDesktop ? 1.2 : 1,
            delay: 2,
          }}
        >
          <Image
            src={femida}
            alt="Femida"
            priority={true}
            fetchPriority="high"
            fill
          />
        </motion.div>

        {/* GRADIENTS */}

        <motion.div
          key={"main_gradient"}
          className={styles.main_gradient}
          animate={
            IS_FIRST_RENDER ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={IS_FIRST_RENDER ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
        ></motion.div>

        <motion.div
          key={"second_gradient"}
          animate={
            IS_FIRST_RENDER ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={IS_FIRST_RENDER ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.second_gradient}
        ></motion.div>

        <motion.div
          key={"thirhd_gradient"}
          animate={
            IS_FIRST_RENDER ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={IS_FIRST_RENDER ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.thirhd_gradient}
        ></motion.div>

        <motion.div
          key={"fourth_gradient"}
          animate={
            IS_FIRST_RENDER ? gradientVariants["animate"](isLoad) : false
          }
          variants={gradientVariants["variants"]}
          initial={IS_FIRST_RENDER ? gradientVariants["initial"] : false}
          transition={gradientVariants["transition"](isDesktop)}
          className={styles.fourth_gradient}
        ></motion.div>

        {/* GRADIENT END */}
        {isClient ? (
          <motion.h2
            key={"title_text"}
            animate={
              IS_FIRST_RENDER ? titleWatemarkAnimated["animate"](isStep) : false
            }
            variants={titleWatemarkAnimated["variants"]}
            initial={
              IS_FIRST_RENDER
                ? titleWatemarkAnimated["initial"](screenWidth)
                : false
            }
            transition={titleWatemarkAnimated["transition"]}
            className={styles.title_text}
          >
            Адвокатське об’Єднання
          </motion.h2>
        ) : (
          <div style={{ height: "90px" }}></div>
        )}

        {isClient ? (
          <motion.div
            key={"under_line"}
            animate={
              IS_FIRST_RENDER ? watemarkLineAnimated["animate"](isLoad) : false
            }
            variants={watemarkLineAnimated["variants"]}
            initial={
              IS_FIRST_RENDER
                ? watemarkLineAnimated["initial"](screenWidth)
                : false
            }
            transition={watemarkLineAnimated["transition"]}
            className={styles.under_line}
          ></motion.div>
        ) : (
          <div style={{ height: "21px" }}></div>
        )}

        {isClient ? (
          <motion.div
            key={"text"}
            animate={
              IS_FIRST_RENDER ? watemarTextkAnimated["animate"](isLoad) : false
            }
            variants={watemarTextkAnimated["variants"]}
            initial={
              IS_FIRST_RENDER
                ? watemarTextkAnimated["initial"](screenWidth)
                : false
            }
            transition={watemarTextkAnimated["transition"]}
            className={styles.text}
          >
            Дія задля результату
          </motion.div>
        ) : (
          <div style={{ height: "400px" }}></div>
        )}

        <motion.div
          animate={IS_FIRST_RENDER ? isLoad && "open" : false}
          key={"btn_wrapper"}
          variants={{ open: { y: "0", opacity: 1 } }}
          initial={IS_FIRST_RENDER ? { y: "90px", opacity: 0 } : false}
          transition={{
            duration: 0.6,
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
      </div>
    </section>
  );
}
