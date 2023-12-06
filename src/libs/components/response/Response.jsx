"use client";

import Link from "next/link";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "@/libs/components/button/Button";
import LeftBar from "@/shared/components/left_bar_text/LeftBar";
import Card from "@/libs/components/card/Card";

import dataReviewsStatic from "@/assets/json/reviews.json";

import { iconEnum, themsColor } from "@/shared/enums/enum";

import styles from "./Response.module.scss";

import {
  useEffect,
  useIsSmall,
  useState,
  usePathname,
} from "@/shared/hooks/hooks";

export default function Response({ type, button, description, title }) {
  const [isClient, setIsClient] = useState(false);
  const [reviewsList, setReviewsList] = useState(dataReviewsStatic);

  const path = usePathname();
  const isMobile = useIsSmall();

  const { fill } = themsColor[type];
  const isHome = path === "/";

  function SampleNextArrow(props) {
    const { onClick } = props;
    if (reviewsList.length <= 40) {
      setReviewsList((prev) => {
        return prev.concat(dataReviewsStatic);
      });
    }
    return (
      <div className={styles.next_icon} onClick={onClick}>
        {iconEnum["horizontalArrow"](fill)}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={styles.prev_icon} onClick={onClick}>
        {iconEnum["horizontalArrow"](fill)}
      </div>
    );
  }

  useEffect(() => {
    setIsClient(true);

    axios
      .get("/api/rewiews")
      .then((res) => setReviewsList(res.data.arr))
      .catch(() => {
        setReviewsList(dataReviewsStatic);
      });
  }, []);

  return (
    isClient && (
      <section className={styles.section}>
        <div className={styles.conteiner_section}>
          <div className={styles.left_text_conteiner}>
            <LeftBar text={title} type={type} />
          </div>

          <div className={styles.rigth_conteiner}>
            <div className={styles.conteiner_text}>
              <p className={styles.text}>{description}</p>
            </div>

            <Slider
              infinite={true}
              speed={800}
              slidesToShow={!isMobile ? 2 : 1}
              slidesToScroll={1}
              arrows={true}
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
              swipeToSlide={true}
              swipe={true}
              className={styles.slider}
            >
              {reviewsList.map((item, id) => (
                <div key={id} style={{ height: 439 }}>
                  <Card {...item} key={id} type={type} />
                </div>
              ))}
            </Slider>

            {isHome && (
              <div className={styles.btn_wrapper}>
                <Link href={button["link"]}>
                  <Button
                    text={button["text"]}
                    style={"button_service"}
                    type={"button"}
                    typeStyle={type}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
}
