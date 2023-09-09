import styles from "./AboutCards.module.scss";

import Items from "./items/Items";

export default function AboutCards({ type }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Items type={type} />
      </div>
    </section>
  );
}
