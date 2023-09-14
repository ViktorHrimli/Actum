"use client";

const desktopAnimateWatemark = {
  animate(isStep) {
    return isStep ? "step" : "open";
  },
  variants: {
    open: { x: 300, opacity: 1 },
    step: { x: 0, y: 0, scale: 1, opacity: 1 },
  },
  initial(isClient) {
    return {
      x: 1000,
      y: 90,
      scale: 1.2,
      rotate: "0deg",
      opacity: 0,
    };
  },
  transition: {
    duration: 0.8,
    delay: 0.7,
  },
};

const mobileAnimateWatemark = {
  animate(isDesktop) {
    return "open";
  },
  variants: {
    open: { x: "0", y: "0", scale: 1, rotate: "0deg", opacity: 1 },
  },
  initial(isMobile, screen) {
    return {
      x: screen / isMobile ? 2.6 : 1,
      y: 300,
      scale: isMobile ? 0.9 : 1.8,
      rotate: "90deg",
      opacity: 1,
    };
  },
  transition: {
    duration: 1.6,
    delay: 0.3,
  },
};

const desktopTitleTextWatemark = {
  animate(isStep) {
    return isStep ? "step" : "open";
  },
  variants: {
    open: { x: "250px" },
    step: { x: "0", y: "0" },
  },
  initial(screen = 1280) {
    return { x: screen, y: "90px" };
  },

  transition: {
    duration: 0.8,
    delay: 0.6,
  },
};

const mobileTitleTextWatemark = {
  animate(isStep) {
    return "step";
  },
  variants: {
    step: { x: 0, opacity: 1 },
  },
  initial(screen = 320) {
    return { x: screen, y: 0 };
    // return { opacity: 0 };
  },
  transition: {
    duration: 1,
    delay: 0.8,
  },
};

const desktopWatemarkText = {
  animate: "open",
  variants: {
    open: { x: "0" },
  },
  initial(screen = 320) {
    return { x: -screen, y: 0 };
  },
  transition: {
    duration: 1.2,
    delay: 0.1,
  },
};

const mobileWatemarkText = {
  animate: "open",
  variants: {
    open: { x: "0", opacity: 1 },
  },
  initial(screen = 320) {
    return { x: -screen, y: 0 };
    // return { opacity: 0 };
  },

  transition: {
    duration: 0.5,
    delay: 1,
  },
};

const desktopWatemarkLine = {
  animate: "open",
  variants: {
    open: { x: "0", opacity: 1 },
  },
  initial(screen = 320) {
    return { x: -screen, opacity: 0 };
  },
  transition: {
    duration: 1.2,
    delay: 0.1,
  },
};

const mobileWatemarkLine = {
  animate: "open",
  variants: {
    open: { x: "0", opacity: 1 },
  },
  initial(screen = 320) {
    return { x: -screen, opacity: 0 };
    // return { opacity: 0 };
  },
  transition: {
    duration: 0.5,
    delay: 1,
  },
};

const gradientVariants = {
  animate: "open",
  variants: { open: { opacity: 1 } },
  initial: { opacity: 0 },
  transition(isDesktop) {
    return {
      duration: 0.5,
    };
  },
};
export {
  desktopWatemarkLine,
  mobileWatemarkLine,
  mobileWatemarkText,
  desktopWatemarkText,
  mobileTitleTextWatemark,
  desktopAnimateWatemark,
  mobileAnimateWatemark,
  desktopTitleTextWatemark,
  gradientVariants,
};
