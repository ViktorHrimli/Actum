import dynamic from "next/dynamic";

import Hero from "@/libs/components/hero/Hero";
// import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

const Direction = dynamic(() =>
  import("@/libs/components/ourDirections/Direction")
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany")
);

import { getStaticPage } from "@/shared/services/api/api";
// import { makeSeoTemplate } from "@/shared/helpers/helpers";
import HomeSeo from "@/shared/seo/homePageSeo";

const { API_HOME_PAGE, QUERY_HOME_PAGE, API_MODAL_FORM, QUERY_MODAL_FORM } =
  process.env;

// export async function generateMetadata() {
//   return makeSeoTemplate(API_HOME_PAGE);
// }

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

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);

  return (
    <>
      {/* <StructureData data={seo["structuredData"]} />  */}
      <HomeSeo />

      <Hero type={"home"} {...hero} form={modal} />
      <Direction {...directions} />
      <AboutCompany type={"family"} {...about} />
      <Response type={"family"} {...responses} />
    </>
  );
}