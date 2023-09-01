import styles from "./Items.module.scss";

import CardA from "./cards/cardA/CardA";
import CardB from "./cards/cardB/CardB";
import CardC from "./cards/cardC/CardC";
import CardD from "./cards/cardD/CardD";


export default function Items({type}) {
  return (
    <div className={styles.container}>
      <CardA type={type} />
      <CardB type={type} />
      <CardC type={type} />
      <CardD type={type} />
  </div>
  )
}  

