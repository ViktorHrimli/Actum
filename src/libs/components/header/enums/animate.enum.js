const desktopLogoAnimate = {
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
  variants: {
    start: { x: 0, y: 0, scale: 1, rotate: "0deg" },
    step: { x: 0, y: 0, scale: 1, rotate: "0deg" },
  },

  initial: { x: 120, y: 100, scale: 3, rotate: "90deg" },
  exit: { x: 0, y: 0, scale: 1, rotate: "0deg" },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

export { desktopLogoAnimate, mobileLogoAnimate };
