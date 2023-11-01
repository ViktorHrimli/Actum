"use client";
import Image from "next/image";

import { useEffect, useState } from "@/shared/hooks/hooks";

import ArrowUp from "@/assets/svg/Arrow-up.png";

import styles from "../ContactPanel.module.scss";

const ScrollButtonUp = () => {
  const [showButton, setShowButton] = useState(false);

  const showScrollButton = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      document.documentElement.style.overflow = "hidden";
      const scrollStep = window.scrollY / 50;
      const scrollInterval = setInterval(() => {
        if (window.scrollY > 0) {
          window.scrollBy(0, -scrollStep);
        } else {
          clearInterval(scrollInterval);
          document.documentElement.style.overflow = "";
        }
      }, 15);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showScrollButton);
    return () => {
      window.removeEventListener("scroll", showScrollButton);
    };
  }, []);

  return (
    <div className={styles.btn_up} onClick={scrollToTop}>
      <Image src={ArrowUp} alt="Arrow-up" width={34} height={34} />
    </div>
  );
};

export default ScrollButtonUp;
