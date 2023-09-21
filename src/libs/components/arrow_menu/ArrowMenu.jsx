"use client";

import { motion } from "framer-motion";
import { colorSvg } from "./libs/enums";

import styles from "./ArrowMenu.module.scss";

export default function ArrowMenu({
  type,
  isOpenSelect,
  setIsOpen = () => {},
  fill = "#E2E0E0",
})
{
const { color } = colorSvg[type];

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpenSelect)}
      className={styles.img_wrapper}
      animate={{
        rotate: isOpenSelect ? "180deg" : "0deg",
        scale: isOpenSelect ? 1.2 : 1,
      }}
      transition={{ duration: 0.8 }}
    >
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill={fill}
      >
        <path
          d="M15.2761 21.2406L4.65607 10.0946C4.47878 9.9086 4.37988 9.66152 4.37988 9.40458C4.37988 9.14764 4.47878 8.90056 4.65607 8.71458L4.66807 8.70258C4.75402 8.61211 4.85747 8.54007 4.97214 8.49084C5.0868 8.44162 5.21029 8.41623 5.33507 8.41623C5.45986 8.41623 5.58334 8.44162 5.69801 8.49084C5.81267 8.54007 5.91613 8.61211 6.00207 8.70258L16.0021 19.1986L25.9981 8.70258C26.084 8.61211 26.1875 8.54007 26.3021 8.49084C26.4168 8.44162 26.5403 8.41623 26.6651 8.41623C26.7899 8.41623 26.9133 8.44162 27.028 8.49084C27.1427 8.54007 27.2461 8.61211 27.3321 8.70258L27.3441 8.71458C27.5214 8.90056 27.6203 9.14764 27.6203 9.40458C27.6203 9.66152 27.5214 9.9086 27.3441 10.0946L16.7241 21.2406C16.6307 21.3386 16.5184 21.4166 16.3939 21.47C16.2694 21.5233 16.1355 21.5508 16.0001 21.5508C15.8647 21.5508 15.7307 21.5233 15.6062 21.47C15.4818 21.4166 15.3695 21.3386 15.2761 21.2406Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
}
