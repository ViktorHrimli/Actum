"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "@/shared/hooks/hooks";

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
  border,
}) {
  const [codeCountry, setcodeCountry] = useState("UA");
  const [filterCountry, setFilterCountry] = useState("");

  const handleInputValue = (event) => {
    setFilterCountry(event.target.value);
  };

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

  const search = code.filter((item) =>
    item.name.toLowerCase().includes(filterCountry.toLowerCase())
  );

  return (
    <div className={styles.select_number}>
      <div className={styles.info_box} onClick={handleClick}>
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
        <>
          <ul className={styles.code_box}>
            <li className={styles.item_list}>
              <div className={stylesForm[border]}>
                <div className={styles.serch_icon_wrapper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.7495 20.689L16.0855 15.025C17.4466 13.391 18.1253 11.2951 17.9805 9.1734C17.8356 7.0517 16.8784 5.06752 15.3079 3.63361C13.7374 2.19971 11.6745 1.42648 9.54844 1.47479C7.42236 1.5231 5.39674 2.38922 3.89298 3.89298C2.38922 5.39674 1.5231 7.42236 1.47479 9.54844C1.42648 11.6745 2.19971 13.7374 3.63361 15.3079C5.06752 16.8784 7.0517 17.8356 9.1734 17.9805C11.2951 18.1253 13.391 17.4466 15.025 16.0855L20.689 21.7495L21.7495 20.689ZM2.99948 9.74948C2.99948 8.41445 3.39536 7.10941 4.13706 5.99938C4.87876 4.88935 5.93296 4.02418 7.16636 3.51329C8.39976 3.0024 9.75696 2.86873 11.0663 3.12918C12.3757 3.38963 13.5784 4.0325 14.5224 4.97651C15.4665 5.92051 16.1093 7.12324 16.3698 8.43262C16.6302 9.74199 16.4966 11.0992 15.9857 12.3326C15.4748 13.566 14.6096 14.6202 13.4996 15.3619C12.3895 16.1036 11.0845 16.4995 9.74948 16.4995C7.95987 16.4975 6.24414 15.7857 4.9787 14.5203C3.71326 13.2548 3.00146 11.5391 2.99948 9.74948Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </div>
                <input
                  className={styles.input_search}
                  type="text"
                  placeholder={"Введіть назву країни"}
                  value={filterCountry}
                  onChange={handleInputValue}
                />
              </div>
            </li>
            {search.map((item, id) => (
              <li
                className={styles.item_list}
                onClick={() =>
                  handleChangeNumberCountry(item.code, item.phone) &
                  handleClick()
                }
                key={id}
              >
                <div className={styles.container_countris}>
                  <div className={styles.image_wrapper}>
                    <img
                      src={`https://flagsapi.com/${item.code}/shiny/64.png`}
                    />
                  </div>
                  <span className={styles.phone_color}>+{item.phone}</span>
                </div>

                <p style={{ width: "150px" }}>{item.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {/* <span className={styles.text}>+{phone}</span> */}
    </div>
  );
}
