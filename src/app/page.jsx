import styles from "./page.module.scss";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import Direction from "@/libs/components/ourDirection/Direction";


export default function Home() {
  return (
    <>
      <ContactPanel />
      <Hero />
      <Direction />
    </>
  );
}
