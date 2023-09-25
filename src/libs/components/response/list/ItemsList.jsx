import styles from "./ItemsList.module.scss";

import Card from "@/libs/components/card/Card";
import MobileSlider from "@/libs/components/mobile_animation/MobileSlider";

import { arrPerson } from "../libs/enums";

import DesktopAnimation from "./desktop_animation/DesktopAnimation";

export default function ItemsList({ isMobie, slide, start, type }) {
  return (
    <ul className={styles.card_list_response}>
      {!isMobie ? (
        <DesktopAnimation
          isSide={start}
          type={type}
          data={arrPerson}
          index={slide}
        />
      ) : (
        <MobileSlider isStart={start} key={slide}>
          <Card type={type} key={slide} {...arrPerson[slide]} />
        </MobileSlider>
      )}
    </ul>
  );
}
