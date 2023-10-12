import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import dynamic from "next/dynamic";

import { getHomePage } from "@/shared/services/api/api";

const Direction = dynamic(() =>
  import("@/libs/components/ourDirections/Direction")
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany")
);

export default async function Home() {
  const {
    data: {
      attributes: {
        Hero: hero,
        Directions: directions,
        Responses: responses,
        About: about,
      },
    },
  } = await getHomePage();
  return (
    <>
      <Hero type={"home"} />
      <ContactPanel type={"home"} />
      <Direction />
      <AboutCompany type={"family"} />
      <Response type={"family"} />
    </>
  );
}
