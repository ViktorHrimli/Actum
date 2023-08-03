"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import styles from "./Direction.module.scss";

import FamilyMattrs from "./familyMatters/FamilyMattrs";
import MilitaryMattrs from "./militaryMatters/MilitaryMattrs";
import CriminalMattrs from "./criminalMatters/CriminalMattrs";

import Touch_icon from "@/assets/svg/Touch_icon.png";

// ------------- Mob img

import MobHands from "@/assets/svg/Mob_hands.png";
import MobHalmet from "@/assets/svg/Mob_halmet.png";
import MobCriminal from "@/assets/svg/Mob_criminal.png";

// ------------- Tablet img
import TabletHands from "@/assets/svg/Tablet_hands.jpeg";
import TabletHalmet from "@/assets/svg/Tablet_halmet.jpeg";
import TabletCriminal from "@/assets/svg/Tablet_criminal.jpeg";

//-------------- Desctop img
import Hands from "@/assets/svg/Hands.png";
import Helmet from "@/assets/svg/Helmet.png";
import HelmetAnimations from "@/assets/svg/Halmet_animation.jpeg";
import Criminal from "@/assets/svg/Criminal.png";

import Button from "@/libs/components/button/Button";
import LeftBar from "@/libs/components/left_bar_text/LeftBar";

export default function Direction() {
  const [activeElementIndex, setActiveElementIndex] = useState(0);
  const [activeAnimations, setActiveAnimations] = useState(true);
  // ----------- Animations Tablet

  const [showCards, setShowCards] = useState(false);
  const cardsRef = useRef();

  const [showFirstCard, setShowFirstCard] = useState(false);
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowCards(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showCards) {
      const firstCardTimeout = setTimeout(() => {
        setShowFirstCard(true);
      }, 500);

      const secondCardTimeout = setTimeout(() => {
        setShowSecondCard(true);
      }, 1000);

      const thirdCardTimeout = setTimeout(() => {
        setShowThirdCard(true);
      }, 1500);

      return () => {
        clearTimeout(firstCardTimeout);
        clearTimeout(secondCardTimeout);
        clearTimeout(thirdCardTimeout);
      };
    } else {
      setShowFirstCard(false);
      setShowSecondCard(false);
      setShowThirdCard(false);
    }
  }, [showCards]);

  // ----------- Animations Laptop

  useEffect(() => {
    const intervalIdHands = setInterval(() => {
      setActiveElementIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(intervalIdHands);
    };
  }, []);

  return (
    <section className={styles.direction_section}>
      <div className={styles.direction_container}>
        <div className={styles.box_title}>
          <div className={styles.direction_line}></div>
          <h2 className={styles.direction_title}>наші напрями</h2>
          <div className={styles.direction_line}></div>
        </div>

        {/* ------- mob -------- */}

        <div ref={cardsRef} className={styles.mob_img}>
          <div className={styles.mob_img_hands}>
            <div className={styles.mob_img_hands_gradient}></div>
            <Image
              src={MobHands}
              alt="Hands"
              width={290}
              height={528}
              loading="lazy"
              className={styles.mob_img_hands}
            />

            {showCards && (
              <div className={`${!showFirstCard ? styles.show_hands : ""}`}>
                <FamilyMattrs />
              </div>
            )}
          </div>

          <div className={styles.mob_img_halmet}>
            <Image
              src={MobHalmet}
              alt="Halmet"
              width={290}
              loading="lazy"
              height={528}
              className={styles.mob_img_halmet}
            />

            {showCards && (
              <div className={`${!showSecondCard ? styles.show_halmet : ""}`}>
                <MilitaryMattrs />
              </div>
            )}
          </div>

          <div className={styles.mob_img_criminal}>
            <Image
              src={MobCriminal}
              alt="Halmet"
              width={290}
              height={528}
              loading="lazy"
              className={styles.mob_img_criminal}
            />

            {showCards && (
              <div className={`${!showThirdCard ? styles.show_criminal : ""}`}>
                <CriminalMattrs />
              </div>
            )}
          </div>
        </div>

        {/* ------- tablet ------- */}

        <div ref={cardsRef} className={styles.tablet_img}>
          <div className={styles.tablet_img_hands}>
            <Image
              src={TabletHands}
              alt="Hands"
              loading="lazy"
              fill
              className={styles.tablet_img_hands}
            />

            {showCards && (
              <div className={`${!showFirstCard ? styles.show_hands : ""}`}>
                <FamilyMattrs />
              </div>
            )}
          </div>

          <div className={styles.tablet_img_halmet}>
            <Image
              src={TabletHalmet}
              loading="lazy"
              alt="Halmet"
              fill
              className={styles.tablet_img_halmet}
            />

            {showCards && (
              <div className={`${!showSecondCard ? styles.show_halmet : ""}`}>
                <MilitaryMattrs />
              </div>
            )}
          </div>

          <div className={styles.tablet_img_criminal}>
            <Image
              src={TabletCriminal}
              alt="Halmet"
              loading="lazy"
              fill
              className={styles.tablet_img_criminal}
            />

            {showCards && (
              <div className={`${!showThirdCard ? styles.show_criminal : ""}`}>
                <CriminalMattrs />
              </div>
            )}
          </div>
        </div>

        {/* ------- laptop ------- */}

        <div className={styles.flex_position}>
          <div className={styles.box_img}>
            <div className={styles.hover_hands}>
              {activeElementIndex === 0 && activeAnimations ? (
                <Image
                  src={Touch_icon}
                  alt="Touch"
                  loading="lazy"
                  width={40}
                  height={40}
                  className={styles.touch_icon_hands}
                />
              ) : (
                ""
              )}
              <div className={styles.block_hover_hands}></div>
              <div className={styles.modal_family}>
                <FamilyMattrs />
              </div>
            </div>

            <div className={styles.hover_halmet}>
              {activeElementIndex === 1 && activeAnimations ? (
                <Image
                  src={Touch_icon}
                  alt="Touch"
                  loading="lazy"
                  width={40}
                  height={40}
                  className={styles.touch_icon_halmet}
                />
              ) : (
                ""
              )}
              <div className={styles.block_hover_halmet}></div>
              <div className={styles.modal_military}>
                <MilitaryMattrs />
              </div>
            </div>

            <div className={styles.hover_criminal}>
              {activeElementIndex === 2 && activeAnimations ? (
                <Image
                  src={Touch_icon}
                  alt="Touch"
                  loading="lazy"
                  width={40}
                  height={40}
                  className={styles.touch_icon_criminal}
                />
              ) : (
                ""
              )}
              <div className={styles.block_hover_criminal}></div>
              <div className={styles.modal_criminal}>
                <CriminalMattrs />
              </div>
            </div>

            <div className={styles.img_hands}>
              <Image src={Hands} alt="Hands" fill className={styles.img} />
            </div>
            <div className={styles.img_halmet}>
              {activeElementIndex === 1 && activeAnimations ? (
                <Image
                  src={HelmetAnimations}
                  alt="HelmetAnimations"
                  fill
                  className={styles.img}
                />
              ) : (
                <Image src={Helmet} alt="Helmet" fill className={styles.img} />
              )}
            </div>
            <div className={styles.img_criminal}>
              <Image
                src={Criminal}
                alt="Criminal"
                loading="lazy"
                fill
                className={styles.img}
              />
            </div>

            <div
              className={styles.block_hover_hands_background}
              style={
                activeElementIndex === 0 && activeAnimations
                  ? { background: "rgba(227, 47, 122, 0.40)" }
                  : {}
              }
            ></div>
            <div
              className={styles.block_hover_criminal_background}
              style={
                activeElementIndex === 2 && activeAnimations
                  ? { background: "rgba(63, 46, 100, 0.80)" }
                  : {}
              }
            ></div>
            
            <div className={styles.block_hover_hands_background} style={activeElementIndex === 0 && activeAnimations ? { background: "rgba(227, 47, 122, 0.40)" } : {}}></div>
            <div className={styles.block_hover_criminal_background} style={activeElementIndex === 2 && activeAnimations ? { background: "rgba(63, 46, 100, 0.80)" } : {}}></div>
          </div>
          
            <div className={styles.box_btn}>
            <Button
              style={"button_prymary"}
              text={"усі послуги"}
              type={"button"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
