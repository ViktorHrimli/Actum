import styles from "./page.module.scss";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export default function Home() {
  return (
    <>
      <ContactPanel />
      <Hero />
    </>
  );
}
