import styles from "./Items.module.scss";

import { cardsEnums } from "./libs/enums";

import Card from "@/libs/pages/components/successfulBusiness/card/Card";
import MobileSlider from "@/shared/components/mobile_animation/MobileSlider";
import Arrow from "@/libs/components/arrowCard/Arrow";

export default function Items({
  type,
  screen,
  current,
  setIsChange,
  setIsLeft,
  isLeft,
  color,
  list,
}) {
  return (
    <ul className={styles.container}>
      {screen ? (
        list?.map((el, id) => (
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
            <Card enums={cardsEnums} type={type} {...list[current]} />
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
