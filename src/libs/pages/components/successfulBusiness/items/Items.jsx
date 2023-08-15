import Image from "next/image";

import styles from "./Items.module.scss";

import { cardsEnums } from "./libs/enums"

import Successful_business from "../../../../../assets/svg/Successful_business_hover.jpg"

import Button from "../../../../components/button/Button";


const itemsList = [{
  title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description : "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  image: Successful_business,
},
  {
  title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description : "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  image: Successful_business,
  },{
  title: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description : "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  image: Successful_business,
}
]

export default function Items({type}) {
  // const {color} = cardsEnums[type];

  return <ul className={styles.container}>
    {itemsList?.map(( el, id ) => <li key={id} className={styles.position}>
        <div className={styles.container_img}>
          <Image
            src={el.image}
            alt={"photo"}
            fill
            loading="eager"
            // style={{ objectFit: "cover" }}
          />
      </div>
      <div className={styles.container_text}>
        <div className={styles.border_top}>
          <div className={styles.border_right}></div>
      </div>
          <div className={styles.container_title}>
            <p className={styles.title}>{el.title}</p>
          </div>
          <div className={styles.container_description}>
            <p className={styles.description}>{el.description}</p>
        </div>
        <div className={styles.border_bottom}>
          <div className={styles.border_left}></div>
        </div>
        </div>
    </li>)}
    <div className={styles.container_btn}>
          <Button
                style={"button_prymary"}
                text={"наші публікації"}
                type={"button"}
              />
        </div>
  </ul>
}  


