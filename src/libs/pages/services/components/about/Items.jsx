import Image from "next/image";
import styles from "./Items.module.scss";
import Button from "@/libs/components/button/Button";
import photo_army from "@/assets/svg/sevices_photo_army.png";
import photo_family from "@/assets/svg/sevices_photo_family.png";
import photo_crime from "@/assets/svg/sevices_photo_crime.png";
import Link from "next/link";

const itemsLis = [
  {
    title: "СІМЕЙНІ питання",
    style: "background_family",
    text: [
      "Наші правознавці з 2004 року успішно ведуть справи, що стосуються сімейних правовідносин, поділу майна, оформлення і вступу в спадщину.",
      "З огляду на особливу конфліктність цієї категорії справ, ми пропонуємо індивідуальні стратегії розв’язання спорів, коли клієнт отримує від нас комплексну допомогу – адвокатську, психологічну тощо",
      " Спеціалізуємось на сімейних спорах особливої складності: позбавлення батьківських прав, розірвання шлюбів в іноземних юрисдикціях з поділом майна, визнання недійсним заповітів та шлюбних контрактів.",
    ],
    img: photo_family,
    path: "/paid-priority-family",
  },
  {
    title: "вІйськові питання",
    style: "",
    path: "/paid-priority-army",

    text: [
      "Юристи Актуму – вузькоспеціалізовані військові адвокати для військовозобов’язаних, резервістів, УБД та військовослужбовців ЗСУ, НГУ, ДПСУ, СБУ та інших формувань. А також сімей військових.",
      "Працюємо в галузі військового права з 2014 року. Правники Актуму мають досвід роботи у військовій прокуратурі та багату судову практику в галузі військового права.",
      "Спеціалісти Актуму можуть всебічно оцінити справу, надати змістовну консультацію і запропонувати шлях вирішення найскладнішого питання.",
    ],
    img: photo_army,
  },
  {
    title: "кримінальні питання",
    style: "background_crime",
    path: "/paid-priority-crime",
    text: [
      "Юристи Актуму – вузькоспеціалізовані військові адвокати для військовозобов’язаних, резервістів, УБД та військовослужбовців ЗСУ, НГУ, ДПСУ, СБУ та інших формувань. А також сімей військових.",
      "Працюємо в галузі військового права з 2014 року. Правники Актуму мають досвід роботи у військовій прокуратурі та багату судову практику в галузі військового права.",
      "Спеціалісти Актуму можуть всебічно оцінити справу, надати змістовну консультацію і запропонувати шлях вирішення найскладнішого питання.",
    ],
    img: photo_crime,
  },
];

export default function Items({ items }) {
  return (
    <ul className={styles.items_list}>
      {items.map((el, id) => (
        <li key={id} className={styles.item_wrapper}>
          <h2 className={styles.title_text}>{el.title}</h2>
          <div className={styles.content_wrapper}>
            <div className={styles.card__image_conteiner}>
              <Image
                src={el["photo"]["data"]["attributes"]["url"]}
                fill
                loading="lazy"
                alt={el.title}
                style={{ objectFit: "cover" }}
              />
              <div className={styles[el.button["style"]]}></div>
              <div className={styles.img_btn}>
                <Link href={el?.button["link"]}>
                  <Button
                    text="детальніше"
                    type="button"
                    style="button_service"
                  />
                </Link>
              </div>
            </div>
            <ul className={styles.text_list}>
              {el.texts.map(({ text, id }) => (
                <li key={id}>
                  <p className={styles.text}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
