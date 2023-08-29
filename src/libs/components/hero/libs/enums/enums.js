"use client";

const desktopAnimateWatemark = {
  variants: {
    open: { x: "300px", opacity: 1 },
    step: { x: "0", y: "0", scale: 1, opacity: 1 },
  },
  initial: { x: "210%", y: "90px", scale: 1.2, rotate: "0deg", opacity: 0 },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const mobileAnimateWatemark = {
  variants: {
    open: { x: "0", y: "0", scale: 1, rotate: "0deg", opacity: 1 },
    step: { x: "0", y: "0", scale: 1, rotate: "0deg", opacity: 1 },
  },
  initial: { x: "0px", y: "300px", scale: 2, rotate: "90deg", opacity: 1 },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const desktopTitleTextWatemark = {
  variants: {
    open: { x: "250px" },
    step: { x: "0", y: "0" },
  },
  initial: { x: "110%", y: "90px" },

  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const mobileTitleTextWatemark = {
  variants: {
    open: { x: "0" },
    step: { x: "0", y: "0" },
  },
  initial: { x: "110%" },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const desktopWatemarkText = {
  animate: "open",
  variants: {
    open: { x: "0" },
  },
  initial: { x: "-100%" },
  exit: { x: "0", y: "0px" },
  transition: { ease: "easeIn", duration: 0.8, delay: 3 },
};

const mobileWatemarkText = {
  animate: "open",
  variants: {
    open: { x: "0" },
  },
  initial: { x: "150%" },
  exit: { x: "0", y: "0px" },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const desktopWatemarkLine = {
  animate: "open",
  variants: {
    open: { x: "0", opacity: 1 },
  },
  initial: { x: "-150%", opacity: 0 },
  exit: { x: "0", y: "0px" },
  transition: { ease: "easeIn", duration: 0.8, delay: 3 },
};

const mobileWatemarkLine = {
  animate: "open",
  variants: {
    open: { x: "0", opacity: 1 },
  },
  initial: { x: "200%", opacity: 0 },
  exit: { x: "0", y: "0px" },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
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
