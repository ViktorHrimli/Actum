const desktopLogoAnimate = {
  variants: {
    start: { x: "0", y: "0", scale: 1, rotate: "0deg" },
    step: { x: "100px", y: "255px", scale: 4, rotate: "0deg" },
  },
  initial: { x: `600px`, y: `300px`, scale: 5, rotate: "90deg" },

  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

const mobileLogoAnimate = {
  variants: {
    start: { x: "0", y: "0", scale: 1, rotate: "0deg" },
    step: { x: "0", y: "0", scale: 1, rotate: "0deg" },
  },

  initial: { x: "120px", y: "100px", scale: 3, rotate: "90deg" },
  exit: { x: "0", y: "0", scale: 1, rotate: "0deg" },
  transition: { ease: "easeIn", duration: 0.8, delay: 1 },
};

export { desktopLogoAnimate, mobileLogoAnimate };
