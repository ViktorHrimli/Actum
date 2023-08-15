import styles from "./Items.module.scss";

import {cardsEnums} from "./libs/enums"

const itemsList = [{
  title: "9/20",
  items: ["Маємо 9 офісів в Україні та 20 Військових Адвокатів"],
  description: ["Тому ми оперативно аналізуємо всі обставини та максимально швидко забезпечимо захист по всій країні."],
}, {
  title: "2014 рік",
  items: ["Захищаємо військових з 2014 року"],
  description: "Нам довіряють захисники Батьківщини. Юридичне бюро «Актум» – лідер адвокатських послуг в галузі військового права в Україні.",
  }, {
  title: "Більше 15000",
  items: ["Консультацій та справ"],
  description: "Саме стільки консультацій та справ правники ЮБ «Актум» надали тільки під час воєнного стану для наших військових та їх сімей.",
  }, {
  title: "№1",
  items: ["кращі в військовому праві"],
  description: "Навчаємо інших адвокатів, маємо власний аналітичний відділ та відділ якості. Беремося за складні та групові справи.",
  }
]

export default function Items({type}) {
  const {color} = cardsEnums[type];

  return <ul className={styles.container}>
    {itemsList?.map(( el, id ) => <li key={id} className={styles.position}>{
      <>{el.items.map((item, id ) => <div className={styles[color]} key={id}>
          <div className={styles.container_title}>
            <p className={styles.title}>{el.title}</p>
          </div>
          <a className={styles.text}>{item}</a>
          <div className={styles.container_text}>
            <p className={styles.description}>{el.description}</p>
          </div>
        </div>)}
      </>
    }</li>)}
  </ul>
}  

