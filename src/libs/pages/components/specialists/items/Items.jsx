import Image from "next/image";
import styles from "./Items.module.scss";

import SpecialistsNatalia from "src/assets/svg/Specialists_Natalia.png"
import SpecialistsOlena from "src/assets/svg/Specialists_Olena.png"
import SpecialistsVictor from "src/assets/svg/Specialists_Victor.png"

// import SpecialistsMap from "src/assets/svg/Map_family.svg"

import {specialistsEnumsMap} from "./libs/enums"

const itemsList = [{
  title: "Коровіна Наталя Георгіївна",
  items: ["Керівник сімейної практики, партнер об`єднання. Веде складні сімейні справи з 2010 року"],
  photo: SpecialistsNatalia,
}, {
  title: "Хоменко Олена Миколаївна",
  items: ["Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit."],
  photo: SpecialistsOlena,
  }, {
  title: "Бондаренко Віктор Вікторович",
  items: ["Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit."],
  photo: SpecialistsVictor,
  }
]

export default function Items({type}) {
  const {colorMap} = specialistsEnumsMap[type];


  return <ul className={styles.container}>
    {itemsList?.map(( el, id ) => <li key={id} >{
      <>
        <div>{el.items.map((item, id ) => <div className={styles.list} key={id}>
          <div className={styles.container_title}>
            <p className={styles.title}>{el.title}</p>
          </div>
          <a className={styles.text}>{item}</a>
          <div className={styles.img}>
          <Image
            src={el.photo}
            alt={el.title}
            fill
            loading="eager"
            style={{ objectFit: "cover" }}
            />
          </div>
        </div>)}</div>
      </>
      
    }</li>)}
    <li className={styles.list_map}>
      <div className={styles.img_map} >
          <Image
            src={colorMap}
            alt={"map"}
            fill
            loading="eager"
            style={{ objectFit: "cover" }}
          />
      </div>
      <div className={styles.text_map_box}>
        <p className={styles.text_map_left}>Працюємо по <span className={styles.text_bold}> всій Україні: </span>надаємо онлайн-консультації або виїзджаємо до Вас.</p>
      </div>
      <div className={styles.text_map_box_right}>
        <p className={styles.text_map_right}>Прямо сьогодні Ви можете завітати в офіс у 9 містах України: <span className={styles.text_bold}> Київ, Львів, Дніпро, Миколаїв, Житомир, Кривий Ріг, Херсон, Покровськ. </span></p>
      </div>
    </li>
  </ul>
}  

