import styles from "./ItemsList.module.scss";

import Card from "@/libs/components/card/Card";
import MobileSlider from "@/shared/components/mobile_animation/MobileSlider";
import DesktopAnimation from "./desktop_animation/DesktopAnimation";

export default function ItemsList({ isMobie, slide, start, type, reviews }) {
  return (
    <ul className={styles.card_list_response}>
      {!isMobie ? (
        <DesktopAnimation
          type={type}
          data={reviews}
          index={slide}
          isLeft={start}
        />
      ) : (
        <MobileSlider isStart={start} key={slide}>
          <Card type={type} key={slide} {...reviews[slide]} />
        </MobileSlider>
      )}
    </ul>
  );
}
