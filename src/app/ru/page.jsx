import dynamic from "next/dynamic";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

const Direction = dynamic(() =>
  import("@/libs/components/ourDirections/Direction")
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany")
);

// import { unPackageTelegramReview } from "@/shared/helpers/unPackageTelegramReview";
import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_HOME_PAGE, QUERY_HOME_PAGE } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_HOME_PAGE);
}

export default async function Home() {
  const {
    data: {
      attributes: {
        Hero: hero,
        Directions: directions,
        Responses: responses,
        About: about,
        seo,
      },
    },
  } = await getStaticPage(API_HOME_PAGE, QUERY_HOME_PAGE);

  // const resultReviews = await unPackageTelegramReview();

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <Hero type={"home"} {...hero} />
      <ContactPanel type={"home"} />
      <Direction {...directions} />
      <AboutCompany type={"family"} {...about} />
      <Response type={"family"} {...responses} />
    </>
  );
}
