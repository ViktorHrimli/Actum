import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import FamilyMattrs from "../familyMatters/FamilyMattrs";
import MilitaryMattrs from "../militaryMatters/MilitaryMattrs";
import CriminalMattrs from "../criminalMatters/CriminalMattrs";
import styles from "../Direction.module.scss";
import MobHands from "@/assets/svg/Mob_hands.png";
import MobHalmet from "@/assets/svg/Mob_halmet.png";
import MobCriminal from "@/assets/svg/Mob_criminal.png";

export default function Mob() {
  const [showCardsHands, setShowCardsHands] = useState(false);
  const [showCardsHalmet, setShowCardsHalmet] = useState(false);
  const [showCardsCriminal, setShowCardsCriminal] = useState(false);

  const cardsRef = useRef();
  const cardsRefHalmet = useRef();
  const cardsRefCriminal = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowCardsHands(true);
          }, 300);
          observer.unobserve(cardsRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
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
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowCardsHalmet(true);
          }, 300);
          observer.unobserve(cardsRefHalmet.current);
          
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (cardsRefHalmet.current) {
      observer.observe(cardsRefHalmet.current);
    }

    return () => {
      if (cardsRefHalmet.current) {
        observer.unobserve(cardsRefHalmet.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowCardsCriminal(true);
          }, 300);
          observer.unobserve(cardsRefCriminal.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (cardsRefCriminal.current) {
      observer.observe(cardsRefCriminal.current);
    }

    return () => {
      if (cardsRefCriminal.current) {
        observer.unobserve(cardsRefCriminal.current);
      }
    };
  }, []);

  return (
    <div className={styles.mob_img}>
      <div ref={cardsRef} className={styles.mob_img_hands}>
        <div className={styles.mob_img_hands_gradient}></div>
        <Image
          src={MobHands}
          alt="Hands"
          width={290}
          height={528}
          loading="lazy"
          className={styles.mob_img_hands}
        />

        {showCardsHands && (
          <div className={styles.show_hands}>
            <FamilyMattrs />
          </div>
        )}
      </div>

      <div ref={cardsRefHalmet} className={styles.mob_img_halmet}>
        <Image
          src={MobHalmet}
          alt="Halmet"
          width={290}
          loading="lazy"
          height={528}
          className={styles.mob_img_halmet}
        />

        {showCardsHalmet && (
          <div className={styles.show_halmet}>
            <MilitaryMattrs />
          </div>
        )}
      </div>

      <div ref={cardsRefCriminal} className={styles.mob_img_criminal}>
        <Image
          src={MobCriminal}
          alt="Halmet"
          width={290}
          height={528}
          loading="lazy"
          className={styles.mob_img_criminal}
        />

        {showCardsCriminal && (
          <div className={styles.show_criminal}>
            <CriminalMattrs />
          </div>
        )}
      </div>
    </div>
  );
}
