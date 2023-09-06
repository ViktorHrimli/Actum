import styles from "./Items.module.scss";

import CardA from "./cards/cardA/CardA";
import CardB from "./cards/cardB/CardB";
import CardC from "./cards/cardC/CardC";
import CardD from "./cards/cardD/CardD";

import MobileSlider from "@/libs/components/mobile_animation/MobileSlider";

const arrListCard = [CardA, CardB, CardC, CardD];

export default function Items({ type, isMobile, current, isLeft }) {
  return (
    <div className={styles.container}>
      {isMobile ? (
        <MobileSlider isStart={isLeft} key={current}>
          {arrListCard.map(
            (Item, id) => id === current && <Item key={id} type={type} />
          )}
        </MobileSlider>
      ) : (
        arrListCard.map((Item, id) => <Item key={id} type={type} />)
      )}
    </div>
  );
}
