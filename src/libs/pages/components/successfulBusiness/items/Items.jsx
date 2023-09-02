import Image from "next/image";

import styles from "./Items.module.scss";

import { cardsEnums } from "./libs/enums";

import Successful_business from "../../../../../assets/svg/Successful_business_hover.jpg";

import Button from "../../../../components/button/Button";

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

export default function Items({ type }) {
  const { background, borderTop, borderRight, borderBottom, bordeerLeft } =
    cardsEnums[type];

  return (
    <ul className={styles.container}>
      {itemsList?.map((el, id) => (
        <li key={id} className={styles.position}>
          <div className={styles.container_img}>
            <Image
              src={el.image}
              alt={"sucsses bussines"}
              fill
              loading="lazy"
            />
          </div>
          <div className={styles[background]}>
            <div className={styles.container_text}>
              <div className={`${styles[borderTop]}`}>
                <div className={styles[borderRight]}></div>
              </div>
              <div className={styles.container_title}>
                <p className={styles.title}>{el.title}</p>
              </div>
              <div className={styles.container_description}>
                <p className={styles.description}>{el.description}</p>
              </div>
              <div className={styles[borderBottom]}>
                <div className={styles[bordeerLeft]}></div>
              </div>
            </div>
          </div>
        </li>
      ))}
      <div className={styles.container_btn}>
        <Button
          typeStyle={type}
          style={"button_prymary"}
          text={"наші публікації"}
          type={"button"}
        />
      </div>
    </ul>
  );
}
