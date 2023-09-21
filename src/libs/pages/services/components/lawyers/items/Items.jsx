import styles from "./Items.module.scss";
import Button from "@/libs/components/button/Button";


const itemsList = [
  {
    title: "Адвокат по кредитах",
    items: ["Визнання недійсним кредитного договору", "Списання пені та штрафу", "Порятунок іпотечної нерухомості ", "тощо"]
  },
  {
  title: "Адвокат земельний",
  items: ["Оформлення у власність", "Присвоєння кадастрового номеру", "Оскарження права власності","тощо"]
  },
  {
  title: "Адвокат по Нерухомості",
  items: ["Приватизація житла", "Права власності", "Оформлення/оскарження", "тощо"]
  },
  {
  title: "Адвокат по ДТП",
  items: ["Аварії з потерпілими", "Захист при Ст. 286", "Більше 20 років досвіду в розслідуваннях та захисту при ДТП","тощо"]
  },
  {
  title: "Адвокат адміністративний",
  items: ["Оформлення у власність", "Присвоєння кадастрового номеру", "Оскарження права власності","тощо"]
  }
]

export default function Items() {
  return <ul className={styles.container}>
    {itemsList?.map(( el, id ) => <li className={styles.container_cards} key={id} >{
      <>
        <div className={styles.border}>
          <div className={styles.border_right}></div>
        </div>
          <div style={{zIndex: 5}}>
            <p className={styles.title}>{el.title}</p>
          </div>
        <ul >{el.items?.map((item, id) => <li className={styles.list} key={id}>
          <span className={styles.marker}></span>
          <p className={styles.link}>{item}</p>
        </li>)}</ul>
        <div className={styles.border_bottom}>
          <div className={styles.border_left}></div>
        </div>
      </>
      
    }</li>)}
    <li className={styles.container_text }>
        <p className={styles.description}>Ми працюємо по усій Україні також саме сьогодні Ви можете завітати в наші офіси у наступних містах: ЛЬВІВ, ДНІПРО, МИКОЛАЇВ, ЖИТОМИР, КРИВИЙ РІГ, ХЕРСОН, ПОКРОВСЬК.</p>
        <div className={styles.container_btn}>
          <Button
              style={"button_prymary"}
              text={"контакти"}
              type={"button"}
            />
        </div>
    </li>
  </ul>
}  

