"use client";
import React, { useState, useEffect } from "react";
import styles from "./logic.module.scss";

const ScrollAwareSection = ({ children, hideOnScrollEnd }) => {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (documentHeight - windowHeight - scrollPosition <= 280) {
        setShouldHide(true);
        hideOnScrollEnd(true);
      } else {
        setShouldHide(false);
        hideOnScrollEnd(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideOnScrollEnd]);

  return (
    <div
      style={{ marginBottom: "auto" }}
      className={shouldHide ? styles.hidden : ""}
    >
      {children}
    </div>
  );
};

export default ScrollAwareSection;
