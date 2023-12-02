import styles from "./Items.module.scss";

import CardB from "./cards/cardB/CardB";

export default function Items({ type, isMobile, list, Slider }) {
  return (
    <div className={styles.container}>
      {isMobile ? (
        <Slider
          infinite={true}
          speed={800}
          slidesToShow={1}
          slidesToScroll={1}
          swipeToSlide={true}
          swipe={true}
          className={styles.slider}
        >
          {list.map((item, id) => (
            <CardB type={type} {...item} key={id} />
          ))}
        </Slider>
      ) : (
        list.map((item, id) => <CardB type={type} {...item} key={id} />)
      )}
    </div>
  );
}

//  {
//    isMobile ? (
//      <MobileSlider isStart={isLeft} key={current}>
//        {arrListCard.map(
//          (Item, id) => id === current && <Item key={id} type={type} />
//        )}
//      </MobileSlider>
//    ) : (
//      arrListCard.map((Item, id) => <Item key={id} type={type} />)
//    );
//  }
