import styles from "./page.module.scss";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import AboutCompany from "@/libs/components/about_company/AboutCompany";
import Response from "@/libs/components/response/Response";

export default function Home() {
  return (
    <>
      <ContactPanel />
      <Hero />
      <div
        style={{ height: "1024px", width: "100%", background: "#fff" }}
      ></div>
      <AboutCompany />
      <Response />
    </>
  );
}
