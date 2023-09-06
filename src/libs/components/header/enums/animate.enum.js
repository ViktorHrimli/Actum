const desktopLogoAnimate = {
  animate(isStep) {
    return isStep ? "start" : "step";
  },
  variants(isBig = false) {
    return {
      start: { x: 0, y: 0, scale: 1, rotate: "0deg" },
      step: { x: 100, y: isBig ? 325 : 255, scale: 4, rotate: "0deg" },
    };
  },
  initial(isBig = false) {
    return { x: 600, y: isBig ? 350 : 300, scale: 5, rotate: "90deg" };
  },

  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const mobileLogoAnimate = {
  animate(isStep) {
    return "start";
  },
  variants(isBig = false) {
    return {
      start: { x: 0, y: 0, scale: 1, rotate: "0deg" },
    };
  },

  initial(screen = 320) {
    return { x: screen / 2.6, y: 100, scale: 3, rotate: "90deg" };
  },
  exit: { x: 0, y: 0, scale: 1, rotate: "0deg" },
  transition: {
    ease: "easeIn",
    duration: 0.8,
    delay: 0.7,
    type: "keyframes",
    stiffness: 10,
  },
};

export { desktopLogoAnimate, mobileLogoAnimate };
