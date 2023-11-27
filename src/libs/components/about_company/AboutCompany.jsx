"use client";

import Image from "next/image";
import Link from "next/link";

import { useClient } from "@/shared/hooks/hooks";

import styles from "./AboutCompany.module.scss";
import gradient from "./AboutGradients.module.scss";

import Animation from "./halpers/Animation";
import Button from "@/libs/components/button/Button";

import animationSignOlena from "@/assets/json/sign_olena.json";
import animationSignNatalia from "@/assets/json/sign_natalia.json";

import Ukraine from "@/assets/svg/Ukraine.png";

export default function AboutCompany({
  title,
  first_text,
  second_text,
  third_text,
  parnter_first,
  partner_second,
  button,
  right_picture,
  left_picture,
  city_description,
  service_description,
}) {
  const isClient = useClient();
  return (
    isClient && (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.conteiner_map}>
            <div
              className={styles.ukraine_inner_text}
              dangerouslySetInnerHTML={{ __html: service_description }}
            ></div>
            <div
              className={styles.ukraine_inner_city}
              dangerouslySetInnerHTML={{ __html: city_description }}
            ></div>
            <div className={styles.ukraine_map}>
              <Image src={Ukraine} alt="Ukraine" fill loading="lazy" />
            </div>
            {/* GRADIENTS */}
            <div className={gradient.main_gradient}></div>
            <div className={gradient.second_gradient}></div>
            <div className={gradient.text_gradient}></div>
            <div className={gradient.partner_gradient}></div>

            {/* PHOTO */}
            <div className={styles.olga_conteiner}>
              <Image
                src={left_picture["data"]["attributes"]["url"] || Natalia}
                alt="Olga"
                quality={100}
                fill
                loading="eager"
              />
            </div>
            <div className={styles.natalia_conteiner}>
              <Image
                src={right_picture["data"]["attributes"]["url"] || Olena}
                alt="Natalia"
                fill
                quality={100}
                loading="eager"
              />
            </div>
          </div>
          <div className={styles.about_conteiner}>
            <h2 className={styles.title_text}>{title}</h2>
            <p className={styles.text}>{first_text}</p>
            <p className={styles.text}>{second_text}</p>
            <p className={styles.text}>{third_text}</p>

            <div className={styles.wrapper_signatur}>
              <div className={styles.conteiner_partner_olena}>
                <p className={styles.partner}>{parnter_first}</p>
                <div className={styles.wrapper_signatur_olena}>
                  <Animation
                    animationData={animationSignOlena}
                    playOnScroll={true}
                  />
                </div>
              </div>
              <div className={styles.conteiner_partner_natalia}>
                <p className={styles.partner}>{partner_second}</p>
                <div className={styles.wrapper_signatur_natalia}>
                  <Animation
                    animationData={animationSignNatalia}
                    playOnScroll={true}
                  />
                </div>
              </div>
            </div>
            <div className={styles.btn_wrapper}>
              <Link href={button["link"]}>
                <Button
                  style={"button_prymary"}
                  text={button["text"]}
                  type={"button"}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
