import dynamic from "next/dynamic";

const Direction = dynamic(() =>
  import("@/libs/components/ourDirections/Direction")
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany")
);

import Hero from "@/libs/components/hero/Hero";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const {
  API_HOME_PAGE,
  QUERY_HOME_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
  API_LOCALIZATION,
} = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_HOME_PAGE, API_LOCALIZATION);
}

export default async function page() {
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
  } = await getStaticPage(API_HOME_PAGE, QUERY_HOME_PAGE, API_LOCALIZATION);

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM, API_LOCALIZATION);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <Hero type={"home"} {...hero} form={modal} />
      <Direction {...directions} />
      <AboutCompany type={"family"} {...about} />
      <Response type={"family"} {...responses} />
    </>
  );
}
