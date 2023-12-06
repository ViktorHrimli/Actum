import styles from "./Items.module.scss";

import CardB from "./cards/cardB/CardB";
import { iconEnum, themsColor } from "@/shared/enums/enum";

export default function Items({ type, isMobile, list, Slider }) {
  const { fill } = themsColor[type];
  const mobileList = list;
  function SampleNextArrow(props) {
    const { onClick } = props;
    mobileList.push(...list);
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

  console.log(mobileList);

  return (
    <div className={styles.container}>
      {isMobile ? (
        <Slider
          infinite={true}
          speed={800}
          slidesToShow={1}
          slidesToScroll={1}
          arrow={true}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          swipeToSlide={true}
          swipe={true}
          className={styles.slider}
        >
          {mobileList.map((item, id) => (
            <CardB type={type} {...item} key={id} />
          ))}
        </Slider>
      ) : (
        list.map((item, id) => <CardB type={type} {...item} key={id} />)
      )}
    </div>
  );
}
