import styles from "./Items.module.scss";

import { cardsEnums } from "./libs/enums";

import Successful_business from "@/assets/svg/Successful_business_hover.jpg";

import Card from "@/libs/pages/components/successfulBusiness/card/Card";
import MobileSlider from "@/shared/components/mobile_animation/MobileSlider";
import Arrow from "@/libs/components/arrowCard/Arrow";

const itemsList = [
  {
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: Successful_business,
  },
  {
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: Successful_business,
  },
  {
    title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: Successful_business,
  },
];

export default function Items({
  type,
  screen,
  current,
  setIsChange,
  setIsLeft,
  isLeft,
  color,
}) {
  return (
    <ul className={styles.container}>
      {screen ? (
        itemsList?.map((el, id) => (
          <Card key={id} enums={cardsEnums} type={type} {...el} />
        ))
      ) : (
        <div style={{ position: "relative" }}>
          <div className={styles.position_arr_left}>
            <Arrow
              type={"default"}
              left={true}
              color={color}
              setIsChange={setIsChange}
              isChange={current}
              setIsLeft={setIsLeft}
            />
          </div>
          <MobileSlider isStart={isLeft} key={current}>
            <Card enums={cardsEnums} type={type} {...itemsList[current]} />
          </MobileSlider>
          <div className={styles.position_arr_right}>
            <Arrow
              type={"default"}
              color={color}
              left={false}
              setIsChange={setIsChange}
              isChange={current}
              setIsLeft={setIsLeft}
            />
          </div>
        </div>
      )}
    </ul>
  );
}
