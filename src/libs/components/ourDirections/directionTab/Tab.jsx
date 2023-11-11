import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import styles from "../Direction.module.scss";

import FamilyMattrs from "../familyMatters/FamilyMattrs";
import MilitaryMattrs from "../militaryMatters/MilitaryMattrs";
import CriminalMattrs from "../criminalMatters/CriminalMattrs";


// ------------- Tablet img
import TabletHands from "@/assets/svg/Tablet_hands.jpeg";
import TabletHalmet from "@/assets/svg/Tablet_halmet.jpeg";
import TabletCriminal from "@/assets/svg/Tablet_criminal.jpeg";

// ----------- Animations Tablet
export default function Tab({ family, army, crime }) {
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

  return (
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
                  {showFirstCard && <FamilyMattrs {...family} />}
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
                  {showSecondCard && <MilitaryMattrs {...army} />}
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
                  {showThirdCard && <CriminalMattrs {...crime} />}
                </div>
              )}
            </div>
          </div>
  )
};