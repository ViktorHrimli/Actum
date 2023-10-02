"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "@/libs/hooks/hooks";

import styles from "./CountryCode.module.scss";
import stylesForm from "@/libs/pages/components/form/Form.module.scss";

import code from "@/assets/json/countries.json";

export default function CountyCode({
  color_text,
  setPhone,
  setIsOpenCountry,
  isOpenCountry,
  setIsOpen,
  setPhoneNumber,
  resetField,
}) {
  const [codeCountry, setcodeCountry] = useState("UA");

  const handleClick = () => {
    setIsOpenCountry(!isOpenCountry);
    setIsOpen(false);
  };

  const handleChangeNumberCountry = (code, phone) => {
    setcodeCountry(code);
    setPhone(phone.toString());
    setPhoneNumber("");
    resetField("phone");
    setIsOpen(false);
  };

  return (
    <div className={styles.select_number}>
      <div className={styles.info_box}>
        <div className={styles.image_wrapper}>
          <img
            className={styles.img_country}
            src={`https://flagsapi.com/${codeCountry}/shiny/64.png`}
          />
        </div>
      </div>
      <motion.div
        animate={{ rotate: isOpenCountry ? "180deg" : "0deg" }}
        transition={{ duration: 0.5 }}
        className={styles.conteiner_icon}
        onClick={handleClick}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.icon} ${stylesForm[color_text]}`}
        />
      </motion.div>
      {isOpenCountry && (
        <ul className={styles.code_box}>
          {code.map((item, id) => (
            <li
              className={styles.item_list}
              onClick={() => handleChangeNumberCountry(item.code, item.phone)}
              key={id}
            >
              <div className={styles.image_wrapper}>
                <img src={`https://flagsapi.com/${item.code}/shiny/64.png`} />
              </div>
              <span className={styles.phone_color}>+{item.phone}</span>
            </li>
          ))}
        </ul>
      )}
      {/* <span className={styles.text}>+{phone}</span> */}
    </div>
  );
}
