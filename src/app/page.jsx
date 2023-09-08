import Hero from "@/libs/components/hero/Hero";
import Direction from "@/libs/components/ourDirections/Direction";
import AboutCompany from "@/libs/components/about_company/AboutCompany";
import Response from "@/libs/components/response/Response";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export default function Home() {
  return (
    <>
      <Hero />
      <ContactPanel type={"home"} />
      <Direction />
      <AboutCompany type={"family"} />
      <Response type={"family"} />
    </>
  );
}
