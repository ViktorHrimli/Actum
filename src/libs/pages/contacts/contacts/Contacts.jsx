"use client"
import { useState } from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion"

import LeftBar from "@/libs/components/left_bar_text/LeftBar"
import Button from "@/libs/components/button/Button";

import styles from "./Contacts.module.scss";

import touch from "../../../../assets/svg/Klick_icon.png";

import MapUkraine from "../../../../assets/svg/Contacts_map_white.svg";

import Telegram from "../../../../assets/svg/Contact_telegram.svg";
import Viber from "../../../../assets/svg/Contact_viber.svg";
import Instagram from "../../../../assets/svg/Contact_instagram.svg";
import Facebook from "../../../../assets/svg/Contact-facebook.svg";

const animations = {
  qwerty: {
    scale: 1.1,
    transition: { duration: 0.3, repeat: Infinity }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5
    }
  }
}

export default function Contacts({ type }) {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
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
                <div
                onMouseOver={() => setIsVisible(false)}>
                <AnimatePresence>
                    {isVisible && (<motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={styles.gradient}>
                      
                      <motion.div
                        animate={{ scale: 1.2, x: -40, y: -20}}
                        transition={{ duration: 1.5, repeat: Infinity}}
                      >
                      <Image
                        src={touch}
                        alt="touch"
                        loading="lazy"
                        objectFit="cover"
                        width={"40"}
                        style={{position: "absolute", top: "40px", right: "40px"}}
                      />
                      </motion.div>
                    <div className={styles.map_ukraine}>
                    <div className={styles.ukraine_inner_text}>
                      <p>
                        Працюємо по <span className={styles.bold_text}>всій Україні</span>:
                        надаємо онлайн-консультації або виїзджаємо до Вас.
                      </p>
                    </div>
                    <div className={styles.ukraine_inner_city}>
                      <p>Прямо сьогодні Ви можете завітати в офіс у 9 містах України:
                        <span className={styles.bold_text}>
                          Київ, Львів, Дніпро, Миколаїв, Житомир, Кривий Ріг, Херсон,
                          Покровськ.
                        </span>
                      </p>
                      <p className={styles.bold_text_mob}>
                        Київ, Львів, Дніпро, Миколаїв, Житомир, Кривий Ріг, Херсон,
                        Покровськ.
                      </p>
                    </div>
                    <Image
                      src={MapUkraine}
                      alt="Map"
                      fill
                      loading="lazy"
                    />
                  </div>
                  </motion.div>)}
                  </AnimatePresence>
                </div>

                  <div className={styles.google_map} onMouseLeave={() => setIsVisible(true)}>
                    <iframe style={{ border: "none" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.985689330561!2d30.521125500000007!3d50.497224100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1f9ab851327%3A0xdef11545537f44d4!2z0YPQuy4g0J7QsdC-0LvQvtC90YHQutCw0Y8g0L3QsNCxLiwgMTUsINCa0LjQtdCyLCAwNDA3NA!5e0!3m2!1sru!2sua!4v1693237557985!5m2!1sru!2sua" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
          <div className={styles.container_btn}>
            <Button
                style={"button_service"}
                text={"замовити консультацію"}
                type={"button"}
              />
          </div>
          </div>
        <div className={styles.box_contact}>
        <div className={styles.footer_text_box}>
          <div className={styles.display_none}>
            <p className={styles.footer_title}>Головний офіс:</p>
            <p className={styles.footer_text}>
              Україна, м. Київ, вул. Оболонська набережна 15, корпус 5
            </p>
          </div>
          <p className={styles.footer_title}>Філії по містах:</p>

          <p className={styles.footer_text}>
            Львів, Дніпро, Миколаїв, Житомир, Кривий Ріг, Херсон, Покровськ
          </p>
        </div>
          <div className={styles.footer_contact_box}>
          <div className={styles.social_block}>
          <div className={styles.footer_contact}>
            <p className={styles.footer_contact_title}>Phone:</p>
            <div className={styles.box_tel}>
              <a className={styles.phone} href="tel:+380671797213">
                +38-067-179-72-13
              </a>
              <a className={styles.phone} href="tel:+380503334897">
                +38-050-333-48-97
              </a>
            </div>
          </div>
          <div className={styles.footer_contact}>
            <p className={styles.footer_contact_title}>Email:</p>
            <div className={styles.box_tel}>
            <a className={styles.email} href="mailto:info@actum.com.ua">
              info@actum.com.ua
            </a>
            </div>
          </div>
          <div>
            <p className={styles.footer_title}>Наші інформаційні канали</p>
            <ul className={styles.list}>
              <li className={styles.link}>
                <Image
                  src={Telegram}
                  alt="telegram"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
                <a className={styles.social} href="https://t.me/actum_help">telegram канал</a></li>
              <li className={styles.link}>
                <Image
                  src={Viber}
                  alt="viber"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
                <a className={styles.social} href="https://invite.viber.com/?g2=AQAIAxhPHjjf809lW9EPmDdLNrTBIB8uE1N0EfCEBTA5C3kI7AdyB85tcGxAzay%2F&lang=ru">viber група</a></li>
              <li className={styles.link}>
                <Image
                  src={Instagram}
                  alt="instagram"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
                <a className={styles.social} href="https://www.instagram.com/actum.com.ua/">instagram сторінка</a></li>
              <li className={styles.link}>
                <Image
                  src={Facebook}
                  alt="facebook"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
                <a className={styles.social} href="https://www.facebook.com/ActumHelp">facebook сторінка</a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}