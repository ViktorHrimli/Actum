"use client";
import {
  useIsBig,
  useState,
  useEffect,
  useIsSmall,
} from "@/shared/hooks/hooks";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "@/libs/pages/components/successfulBusiness/card/Card";

import { gradientEnums, cardsEnums } from "./libs/enums";

import { iconEnum } from "@/shared/enums/enum";

import styles from "./SuccessfulBusiness.module.scss";

export default function SuccessfulBusiness({ type, title, successful_list }) {
  const [isClient, setIsClient] = useState(false);
  const isDesktop = useIsBig();

  const { gradient, gradientRight, color } = gradientEnums[type];

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={styles.next_icon} onClick={onClick}>
        {iconEnum["horizontalArrow"](color)}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={styles.prev_icon} onClick={onClick}>
        {iconEnum["horizontalArrow"](color)}
      </div>
    );
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles[gradient]}></div>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        {isClient && (
          <Slider
            infinite={true}
            speed={800}
            slidesToShow={isDesktop ? 3 : 1}
            slidesToScroll={1}
            arrows={true}
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
            swipeToSlide={true}
            swipe={true}
            className={styles.slider}
          >
            {successful_list.map((item, id) => {
              return <Card {...item} key={id} type={type} enums={cardsEnums} />;
            })}
          </Slider>
        )}
      </div>
      <div className={styles[gradientRight]}></div>
    </section>
  );
}
