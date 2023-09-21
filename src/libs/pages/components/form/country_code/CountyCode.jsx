"use client";

import { useMemo, useState } from "@/libs/hooks/hooks";

import ArrowMenu from "@/libs/components/arrow_menu/ArrowMenu";
import styles from "./CountryCode.module.scss";

import code from "@/assets/json/countries.json";

export default function CountyCode({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [codeCountry, setcodeCountry] = useState("UA");
  const [phone, setPhone] = useState(380);

  const handleChangeNumberCountry = (code, phone) => {
    setcodeCountry(code);
    setPhone(phone);
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
        <ArrowMenu isOpenSelect={isOpen} setIsOpen={setIsOpen} type={type} />
      {isOpen && (
        <ul className={styles.code_box}>
          {code.map((item, id) => (
            <li
              className={styles.item_list}
              onClick={() => handleChangeNumberCountry(item.code, item.phone)}
              key={id}
            >
              <div className={styles.image_wrapper}>
                <img
                  src={`https://flagsapi.com/${item.code}/shiny/64.png`}
                />
              </div>
              <span className={styles.phone_color}>+{item.phone}</span>
            </li>
          ))}
        </ul>
      )}
    <span>+{phone}</span>
    </div>
  );
}
