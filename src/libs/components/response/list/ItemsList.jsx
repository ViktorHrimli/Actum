import styles from "./ItemsList.module.scss";

import Card from "@/libs/components/card/Card";

import { arrPerson } from "../libs/enums";

export default function ItemsList({ isDesktop, slide }) {
  return (
    <ul className={styles.card_list_response}>
      {isDesktop ? (
        arrPerson.map((item, id) => <Card key={id} {...item} />)
      ) : (
        <Card key={slide} {...arrPerson[slide]} />
      )}
    </ul>
  );
}