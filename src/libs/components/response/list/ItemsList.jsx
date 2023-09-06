import styles from "./ItemsList.module.scss";

import Card from "@/libs/components/card/Card";
import MobileSlider from "@/libs/components/mobile_animation/MobileSlider";

import { arrPerson } from "../libs/enums";

export default function ItemsList({ isMobie, slide, start }) {
  return (
    <ul className={styles.card_list_response}>
      {!isMobie ? (
        arrPerson.map((item, id) => <Card key={id} {...item} />)
      ) : (
        <MobileSlider isStart={start} key={slide}>
          <Card key={slide} {...arrPerson[slide]} />
        </MobileSlider>
      )}
    </ul>
  );
}
