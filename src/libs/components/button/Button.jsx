// import {colorsEnums} from "./libs/enums"


import styles from "./Button.module.scss";

export default function Button({ onClick, type, text, style, typeStyle = "family" }) {  
  // const { btn, background } = colorsEnums[typeStyle];

  return (
      <button type={type} className={`${styles[style]} `}>
        {text}
      </button>
  );
}
