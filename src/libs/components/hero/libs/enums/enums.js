"use client";

const desktopAnimateWatemark = {
  variants: {
    open: { x: 300, opacity: 1 },
    step: { x: 0, y: 0, scale: 1, opacity: 1 },
  },
  initial: {
    x: 1000,
    y: 90,
    scale: 1.2,
    rotate: "0deg",
    opacity: 0,
  },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const mobileAnimateWatemark = {
  variants: {
    open: { x: "0", y: "0", scale: 1, rotate: "0deg", opacity: 1 },
    step: { x: "0", y: "0", scale: 1, rotate: "0deg", opacity: 1 },
  },
  initial: { x: 0, y: 300, scale: 1.8, rotate: "90deg", opacity: 1 },
  transition: {
    ease: "easeIn",
    duration: 0.8,
    delay: 0.2,
    type: "keyframes",
    stiffness: 10,
  },
};

const desktopTitleTextWatemark = {
  variants: {
    open: { x: "250px" },
    step: { x: "0", y: "0" },
  },
  initial(screen = 1280) {
    return { x: "110%", y: "90px" };
  },

  transition: {
    ease: "easeIn",
    duration: 0.8,
    delay: 1,
    type: "keyframes",
    stiffness: 10,
  },
};

const mobileTitleTextWatemark = {
  variants: {
    open: { x: "0" },
    step: { x: "0", y: "0" },
  },
  initial(screen = 320) {
    return { x: screen, y: 0 };
  },
  transition: {
    ease: "easeIn",
    duration: 0.8,
    delay: 0.3,
    type: "keyframes",
    stiffness: 10,
  },
};

const desktopWatemarkText = {
  animate: "open",
  variants: {
    open: { x: "0" },
  },
  initial(screen = 320) {
    return { x: "-100%", y: 0 };
  },
  transition: { ease: "easeIn", duration: 0.8, delay: 3 },
};

const mobileWatemarkText = {
  animate: "open",
  variants: {
    open: { x: "0" },
  },
  initial(screen = 320) {
    return { x: -screen, y: 0 };
  },

  transition: {
    ease: "easeIn",
    duration: 0.8,
    delay: 0.3,
    type: "keyframes",
    stiffness: 10,
  },
};

const desktopWatemarkLine = {
  animate: "open",
  variants: {
    open: { x: "0", opacity: 1 },
  },
  initial(screen = 320) {
    return { x: "-150%", opacity: 0 };
  },
  transition: { ease: "easeIn", duration: 0.8, delay: 3 },
};

const mobileWatemarkLine = {
  animate: "open",
  variants: {
    open: { x: "0", opacity: 1 },
  },
  initial(screen = 320) {
    return { x: -screen, opacity: 0 };
  },
  transition: {
    ease: "easeIn",
    duration: 0.8,
    delay: 0.3,
    type: "keyframes",
    stiffness: 10,
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
};
