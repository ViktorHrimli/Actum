import Image from "next/image";

import styles from "./CurrentPublication.module.scss";

import Button from "@/libs/components/button/Button";

import img from "@/assets/svg/publics_item_1.png";
import Search from "@/libs/pages/components/search/Search";

export default function CurrentPublication() {
  return (
    <section className={styles.section}>
      <div className={styles.conteiner}>
        <h2 className={styles.title_text}>
          ЧОМУ ВІЙСЬКОВИМ НЕ ВИПЛАЧУЮТЬ КОМПЕНСАЦІЮ ЗА ПОРАНЕННЯ?
        </h2>
        <div className={styles.wrapper_content}>
          <div className={styles.text_conteiner}>
            <p className={styles.text}>
              Українські військові можуть розраховувати на виплату у розмірі 100
              тисяч гривень від держави за отримане в ході виконання бойових
              завдань поранення або за отриману інвалідність. Проте гроші
              захисникам виплачують не у всіх випадках. Що це за випадки,
              розберемо у цій публікації.
            </p>

            <ol className={styles.number_list}>
              <strong className={styles.strong_text}>
                Існує дев’ять причин, на підставі яких військовим буде
                відмовлено від виплат:
              </strong>
              <li>
                <p className={styles.text}>
                  умисне заподіяння шкоди своєму здоров’ю;
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  перебування потерпілого військовослужбовця за місцем
                  проживання;
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  самовільне залишення військовослужбовцям місця служби;
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  умисне вчинення військовим кримінального злочину, встановлене
                  обвинувальним вироком суду або ухвалою (ухвалою) про закриття
                  кримінального провадження;
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  алкогольне, наркотичне чи токсичне сп’яніння, не обумовлене
                  технологічним процесом, яке стало основною причиною нещасного
                  випадку та було підтверджено медичними висновками;
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  перебування військовослужбовця, який отримав поранення, у
                  відпустці або у звільненні з розташування військової частини;
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  використання в особистих цілях без відома командування
                  транспортних засобів, озброєння, обладнання, інструментів та
                  матеріалів, що належать до військової частини або
                  використовуються нею;
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  погіршення стану здоров’я внаслідок отруєння
                  алкоголем/наркотичними засобами/токсичними або отруйними
                  речовинами, за умови, що отруєння не пов’язане з впливом цих
                  речовин на постраждалого військового внаслідок їх застосування
                  у технологічному процесі чи не задовільного зберігання, чи
                  транспортування, а потерпілий до настання нещасного випадку
                  був відсторонений від виконання обов’язків командиром
                  (начальником).
                </p>
              </li>
              <li>
                <p className={styles.text}>
                  природна смерть, що настала внаслідок вроджених вад здоров’я.
                  Всі обставини, за яких нещасні випадки не визнані пов’язаними
                  з виконанням військовослужбовця своїх обов’язків, визначаються
                  у ході службового розслідування.
                </p>
              </li>
            </ol>
          </div>

          <div className={styles.image_wrapper}>
            <Image
              src={img}
              alt={"photo thems"}
              fill
              fetchPriority="low"
              objectFit="cover"
            />
            <div className={styles.btn_wrapper}>
              <Button
                style={"button_service"}
                text={"замовити консультацію"}
                type={"button"}
              />
            </div>
          </div>
        </div>
        <Search />
      </div>
    </section>
  );
}
