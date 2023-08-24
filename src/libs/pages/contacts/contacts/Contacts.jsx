import Image from "next/image";

import LeftBar from "@/libs/components/left_bar_text/LeftBar"
import Button from "@/libs/components/button/Button";

import styles from "./Contacts.module.scss";

import MapGoogle from "@/assets/svg/Map_google.png";

import MapUkraine from "../../../../assets/svg/Contacts_map_white.svg";

import Telegram from "../../../../assets/svg/Contact_telegram.svg";
import Viber from "../../../../assets/svg/Contact_viber.svg";
import Instagram from "../../../../assets/svg/Contact_instagram.svg";
import Facebook from "../../../../assets/svg/Contact-facebook.svg";



export default function Contacts({type}) {
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
              <div className={styles.gradient}>
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
                  // objectFit="cover"
                  />
                </div>
              </div>
              <Image
                  src={MapGoogle}
                  alt="Map"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
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
                <a className={styles.social} href="">telegram канал</a></li>
              <li className={styles.link}>
                <Image
                  src={Viber}
                  alt="viber"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
                <a className={styles.social} href="">viber група</a></li>
              <li className={styles.link}>
                <Image
                  src={Instagram}
                  alt="instagram"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
                <a className={styles.social} href="">instagram сторінка</a></li>
              <li className={styles.link}>
                <Image
                  src={Facebook}
                  alt="facebook"
                  fill
                  loading="lazy"
                  objectFit="cover"
                />
                <a className={styles.social} href="">facebook сторінка</a></li>
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