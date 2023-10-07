"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import styles from "./Direction.module.scss";

import FamilyMattrs from "./familyMatters/FamilyMattrs";
import MilitaryMattrs from "./militaryMatters/MilitaryMattrs";
import CriminalMattrs from "./criminalMatters/CriminalMattrs";

import Touch_icon from "@/assets/svg/Touch_icon.png";

// ------------- Tablet img
import TabletHands from "@/assets/svg/Tablet_hands.jpeg";
import TabletHalmet from "@/assets/svg/Tablet_halmet.jpeg";
import TabletCriminal from "@/assets/svg/Tablet_criminal.jpeg";

//-------------- Desctop img
import Hands from "@/assets/svg/Hands.png";
import Hands_animations from "@/assets/svg/Hands_pink.png";
import Helmet from "@/assets/svg/Helmet.png";
import HelmetAnimations from "@/assets/svg/Halmet_animation.png";
import Criminal from "@/assets/svg/Criminal.png";
import Criminal_animations from "@/assets/svg/Ctiminal_blue.png";

import Button from "@/libs/components/button/Button";
import Link from "next/link";
import Mob from "./directionMob/Mob";
import { useClient } from "@/libs/hooks/useClient";

const ONE = 0;
const SECOND = 1;
const THERD = 2;

export default function Direction({ title_text, Family, Army, Crime, button }) {
  const [activeElementIndex, setActiveElementIndex] = useState(0);
  const [activeAnimations, setActiveAnimations] = useState(true);
  // --------- hover
  const [hoverHands, setHoverHands] = useState(false);
  const [hoverHalmet, setHoverHalmet] = useState(false);
  const [hoverCriminal, setHoverCriminal] = useState(false);

  // ---------- modal Open
  const [modalHands, setModalHands] = useState(false);
  const [modalHalmet, setmodalHalmet] = useState(false);
  const [modalCriminal, setModalCriminal] = useState(false);

  const isClient = useClient();

  const openModalHands = () => {
    setModalHands(!modalHands);
    setHoverHands(false);
    setmodalHalmet(false);
    setModalCriminal(false);
  };

  const openModalhalmet = () => {
    setmodalHalmet(!modalHalmet);
    setHoverHalmet(false);
    setModalHands(false);
    setModalCriminal(false);
  };

  const openModalCriminal = () => {
    setModalCriminal(!modalCriminal);
    setHoverCriminal(false);
    setmodalHalmet(false);
    setModalHands(false);
  };

  // ----------- Animations Tablet
  const [showCards, setShowCards] = useState(false);

  const [revers, setRevers] = useState(false);

  const cardsRefTab = useRef();

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
        threshold: 0.1,
      }
    );

    if (cardsRefTab.current) {
      observer.observe(cardsRefTab.current);
    }

    return () => {
      if (cardsRefTab.current) {
        observer.unobserve(cardsRefTab.current);
      }
    };
  }, []);

  useEffect(() => {
    if (revers) {
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
        setRevers(!revers);
      }
    } else if (showCards) {
      const firstCardTimeout = setTimeout(() => {
        setShowFirstCard(true);
      }, 1500);

      const secondCardTimeout = setTimeout(() => {
        setShowSecondCard(true);
      }, 1000);

      const thirdCardTimeout = setTimeout(() => {
        setShowThirdCard(true);
      }, 500);

      return () => {
        clearTimeout(firstCardTimeout);
        clearTimeout(secondCardTimeout);
        clearTimeout(thirdCardTimeout);
      };
    } else {
      setShowFirstCard(false);
      setShowSecondCard(false);
      setShowThirdCard(false);
      setRevers(!revers);
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
    isClient && (
      <section className={styles.direction_section}>
        <div className={styles.direction_container}>
          <div className={styles.background}></div>

          <div className={styles.box_title}>
            <div className={styles.direction_line}></div>
            <h2 className={styles.direction_title}>{title_text}</h2>
            <div className={styles.direction_line}></div>
          </div>

          {/* ------- mob -------- */}
          <Mob family={Family} army={Army} crime={Crime} />
          {/* ------- tablet ------- */}
          <div ref={cardsRefTab} className={styles.tablet_img}>
            <div className={styles.tablet_img_hands}>
              <Image
                src={TabletHands}
                alt="Hands"
                loading="lazy"
                fill
                className={styles.tablet_img_hands}
              />

              {showCards && (
                <div className={styles.show_hands_tab}>
                  {showFirstCard && <FamilyMattrs {...Family[0]} />}
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
                <div className={styles.show_halmet_tab}>
                  {showSecondCard && <MilitaryMattrs {...Army[0]} />}
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
                <div className={styles.show_criminal_tab}>
                  {showThirdCard && <CriminalMattrs {...Crime[0]} />}
                </div>
              )}
            </div>
          </div>

          {/* ------- laptop ------- */}

          <div className={styles.flex_position}>
            <div className={styles.box_img}>
              <div
                className={styles.hover_hands}
                onMouseOver={() =>
                  setActiveAnimations(false) & setHoverHands(true)
                }
                onMouseLeave={() =>
                  modalHands
                    ? {}
                    : setActiveAnimations(true) & setHoverHands(false)
                }
              >
                {hoverHands ? (
                  <Image
                    src={Touch_icon}
                    alt="Touch"
                    loading="lazy"
                    width={40}
                    height={40}
                    className={styles.touch_icon_hands}
                    onClick={openModalHands}
                  />
                ) : (
                  ""
                )}
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
                <div
                  className={styles.block_hover_hands}
                  onClick={openModalHands}
                ></div>
                <div className={styles.modal_family}>
                  {modalHands && (
                    <FamilyMattrs
                      openModalHands={openModalHands}
                      {...Family[0]}
                    />
                  )}
                </div>
              </div>

              <div
                className={styles.hover_halmet}
                onMouseOver={() =>
                  setActiveAnimations(false) & setHoverHalmet(true)
                }
                onMouseLeave={() =>
                  modalHalmet
                    ? {}
                    : setActiveAnimations(true) & setHoverHalmet(false)
                }
              >
                {hoverHalmet && (
                  <Image
                    src={Touch_icon}
                    alt="Touch"
                    loading="lazy"
                    width={40}
                    height={40}
                    className={styles.touch_icon_halmet}
                    onClick={openModalhalmet}
                  />
                )}
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
                <div
                  className={styles.block_hover_halmet}
                  onClick={openModalhalmet}
                ></div>
                <div className={styles.modal_military}>
                  {modalHalmet && (
                    <MilitaryMattrs
                      openModalhalmet={openModalhalmet}
                      {...Army[0]}
                    />
                  )}
                </div>
              </div>

              <div
                className={styles.hover_criminal}
                onMouseOver={() =>
                  setActiveAnimations(false) & setHoverCriminal(true)
                }
                onMouseLeave={() =>
                  modalCriminal
                    ? {}
                    : setActiveAnimations(true) & setHoverCriminal(false)
                }
              >
                {hoverCriminal && (
                  <Image
                    src={Touch_icon}
                    alt="Touch"
                    loading="lazy"
                    width={40}
                    height={40}
                    className={styles.touch_icon_criminal}
                    onClick={openModalCriminal}
                  />
                )}
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
                <div
                  className={styles.block_hover_criminal}
                  onClick={openModalCriminal}
                ></div>
                <div className={styles.modal_criminal}>
                  {modalCriminal && (
                    <CriminalMattrs
                      openModalCriminal={openModalCriminal}
                      {...Crime[0]}
                    />
                  )}
                </div>
              </div>

              <div className={styles.img_hands}>
                {activeElementIndex === 0 && activeAnimations ? (
                  <Image
                    src={Hands_animations}
                    alt="Hands"
                    fill
                    className={styles.img}
                  />
                ) : hoverHands ? (
                  <Image
                    src={Hands_animations}
                    alt="Hands"
                    fill
                    className={styles.img}
                  />
                ) : (
                  <Image src={Hands} alt="Hands" fill className={styles.img} />
                )}
              </div>
              <div className={styles.img_halmet}>
                {activeElementIndex === 1 && activeAnimations ? (
                  <Image
                    src={HelmetAnimations}
                    alt="HelmetAnimations"
                    fill
                    className={styles.img}
                  />
                ) : hoverHalmet ? (
                  <Image
                    src={HelmetAnimations}
                    alt="HelmetAnimations"
                    fill
                    className={styles.img}
                  />
                ) : (
                  <Image
                    src={Helmet}
                    alt="Helmet"
                    fill
                    className={styles.img}
                  />
                )}
              </div>
              <div className={styles.img_criminal}>
                {activeElementIndex === 2 && activeAnimations ? (
                  <Image
                    src={Criminal_animations}
                    alt="Criminal"
                    loading="lazy"
                    fill
                    className={styles.img}
                  />
                ) : hoverCriminal ? (
                  <Image
                    src={Criminal_animations}
                    alt="Criminal"
                    loading="lazy"
                    fill
                    className={styles.img}
                  />
                ) : (
                  <Image
                    src={Criminal}
                    alt="Criminal"
                    loading="lazy"
                    fill
                    className={styles.img}
                  />
                )}
              </div>

              <div className={styles.block_hover_hands_background}></div>
              <div className={styles.block_hover_criminal_background}></div>
            </div>
            {/* -------------- marker ------------- */}
            <div className={styles.marker_box}>
              <div
                onClick={() => openModalHands()}
                onMouseOver={() =>
                  setActiveAnimations(false) & setHoverHands(true)
                }
                onMouseLeave={() =>
                  modalHands
                    ? setActiveAnimations(false)
                    : setActiveAnimations(true) & setHoverHands(false)
                }
                className={styles.marker}
                style={
                  !modalHands
                    ? {
                        background: hoverHands
                          ? "#E32F7A"
                          : (activeElementIndex === ONE) & activeAnimations
                          ? "#E32F7A"
                          : "#1F1F1F",
                      }
                    : { background: "#E32F7A" }
                }
              ></div>
              <div
                onClick={() => openModalhalmet()}
                onMouseOver={() =>
                  setActiveAnimations(false) & setHoverHalmet(true)
                }
                onMouseLeave={() =>
                  modalHalmet
                    ? setActiveAnimations(false)
                    : setActiveAnimations(true) & setHoverHalmet(false)
                }
                className={styles.marker}
                style={
                  !modalHalmet
                    ? {
                        background: hoverHalmet
                          ? "#E32F7A"
                          : (activeElementIndex === SECOND) & activeAnimations
                          ? "#E32F7A"
                          : "#1F1F1F",
                      }
                    : { background: "#E32F7A" }
                }
              ></div>
              <div
                onClick={() => openModalCriminal()}
                onMouseOver={() =>
                  setActiveAnimations(false) & setHoverCriminal(true)
                }
                onMouseLeave={() =>
                  modalCriminal
                    ? setActiveAnimations(false)
                    : setActiveAnimations(true) & setHoverCriminal(false)
                }
                className={styles.marker}
                style={
                  !modalCriminal
                    ? {
                        background: hoverCriminal
                          ? "#E32F7A"
                          : (activeElementIndex === THERD) & activeAnimations
                          ? "#E32F7A"
                          : "#1F1F1F",
                      }
                    : { background: "#E32F7A" }
                }
              ></div>
            </div>

            <div className={styles.box_btn}>
              <Link href={button["link"]}>
                <Button
                  style={"button_service"}
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
