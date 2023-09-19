"use client";

import { useMemo, useState } from "@/libs/hooks/hooks";

import ArrowMenu from "@/libs/components/arrow_menu/ArrowMenu";
import styles from "./CountryCode.module.scss";

import code from "@/assets/json/countries.json";

export default function CountyCode() {
  const [isOpen, setIsOpen] = useState(false);
  const [codeCountry, setcodeCountry] = useState("UA");
  const [phone, setPhone] = useState(+380);

  const handleChangeNumberCountry = (code, phone) => {
    setcodeCountry(code);
    setPhone(phone);
  };

  return (
    <div className={styles.select_number}>
      <div>
        <span>{phone}</span>
        <div className={styles.image_wrapper}>
          <img src={`https://flagsapi.com/${codeCountry}/shiny/64.png`}></img>
        </div>
      </div>

      <ArrowMenu isOpenSelect={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <ul className={styles.code_box}>
          {code.map((item, id) => (
            <li
              onClick={() => handleChangeNumberCountry(item.code, item.phone)}
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "5px",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <div className={styles.image_wrapper}>
                <img
                  src={`https://flagsapi.com/${item.code}/shiny/64.png`}
                ></img>
              </div>
              <span style={{ color: "white" }}>{item.phone}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
