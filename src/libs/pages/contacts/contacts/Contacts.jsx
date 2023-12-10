"use client";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "@/shared/hooks/hooks";

import LeftBar from "@/shared/components/left_bar_text/LeftBar";
import Button from "@/libs/components/button/Button";
import ModalForm from "@/libs/modal/modalForm/modalForm";

import touch from "@/assets/svg/Klick_icon.png";
import MapUkraine from "@/assets/svg/Contacts_map_white.svg";

import { iconEnum } from "@/shared/enums/enum";

import styles from "./Contacts.module.scss";

export default function Contacts({
  type,
  title,
  social_list,
  description,
  email,
  phones,
  button,
  city_description,
  city_services,
  modal
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalOnClick = () => {
    setIsOpenModal(true)
  }

  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_left_bar_position}>
          <div className={styles.container_left_bar}>
            <LeftBar type={"family"} text={"контакти"} />
          </div>
        </div>
        <div className={styles.container_contacts}>
          <div>
            <div className={styles.container_map}>
              <div className={styles.img}>
                <div onMouseOver={() => setIsVisible(false)}>
                  <AnimatePresence>
                    {isVisible && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.gradient}
                      >
                        <div>
                          <Image
                            src={touch}
                            alt="touch"
                            loading="lazy"
                            width={"30"}
                            objectFit="cover"
                            className={styles.pulse}
                          />
                        </div>

                        <div className={styles.map_ukraine}>
                          <div
                            className={styles.ukraine_inner_text}
                            dangerouslySetInnerHTML={{ __html: city_services }}
                          ></div>
                          <div
                            className={styles.ukraine_inner_city}
                            dangerouslySetInnerHTML={{
                              __html: city_description,
                            }}
                          ></div>
                          <Image
                            src={MapUkraine}
                            alt="Map"
                            fill
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className={styles.google_map}
                  onMouseLeave={() => setIsVisible(true)}
                >
                  <iframe
                    style={{ border: "none" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.7595604197312!2d30.5214407!3d50.497433484804226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d13a173df941%3A0x4ae1143f2f2a4934!2z0JDQtNCy0L7QutCw0YLRgdGM0LrQtSDQntCxJ9GU0LTQvdCw0L3QvdGPICLQkNC60YLRg9C8INCT0YDRg9C_Ig!5e0!3m2!1sru!2sua!4v1700481751033!5m2!1sru!2sua"
                    width="100%"
                    height="100%"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.container_btn} onClick={modalOnClick}>
              <Button
                style={"button_service"}
                text={button["text"]}
                type={"button"}
              />
            </div>
          </div>
          <div className={styles.box_contact}>
            <div className={styles.footer_text_box}>
              <div className={styles.display_none}>
                <p className={styles.footer_title}>Головний офіс:</p>
                <p className={styles.footer_text}>{title}</p>
              </div>
              <p className={styles.footer_title}>Філії по містах:</p>

              <p className={styles.footer_text}>{description}</p>
            </div>
            <div className={styles.footer_contact_box}>
              <div className={styles.social_block}>
                <div className={styles.footer_contact}>
                  <p className={styles.footer_contact_title}>Phone:</p>
                  <div className={styles.box_tel}>
                    <a
                      className={styles.phone}
                      href={`tel:${phones["KiyvStar"]}`}
                    >
                      {phones["KiyvStar"]}
                    </a>
                    <a
                      className={styles.phone}
                      href={`tel:${phones["Vodafone"]}`}
                    >
                      {phones["Vodafone"]}
                    </a>
                  </div>
                </div>
                <div className={styles.footer_contact}>
                  <p className={styles.footer_contact_title}>Email:</p>
                  <div className={styles.box_tel}>
                    <a className={styles.email} href={`mailto:${email}`}>
                      {email}
                    </a>
                  </div>
                </div>
                <div>
                  <p className={styles.footer_title}>
                    Наші інформаційні канали
                  </p>
                  <ul className={styles.list}>
                    {social_list.map(({ name, link, icons }, id) => (
                      <li key={id} className={styles.link}>
                        <Link
                          href={link}
                          target="_blank"
                          className={styles.conteiner_link}
                        >
                          <div className={styles.svg_hover}>
                            <FontAwesomeIcon
                              icon={iconEnum[icons]}
                              className={styles.path}
                            />
                          </div>
                          <p className={styles.social_text}>{name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      {isOpenModal && <ModalForm type={"family"} form={modal} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />}
    </>
  );
}
