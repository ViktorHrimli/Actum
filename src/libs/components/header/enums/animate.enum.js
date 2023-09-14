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

  transition: {
    ease: "easeInOut",
    type: "keyframes",
    duration: 0.6,
    delay: 0.7,
  },
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

  transition: {
    ease: "easeInOut",
    duration: 1.6,
    delay: 0.4,
    type: "keyframes",
  },
};

export { desktopLogoAnimate, mobileLogoAnimate };
