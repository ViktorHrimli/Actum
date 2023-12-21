import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Descrition from "@/libs/pages/services/components/description/Description";
import About from "@/shared/components/about/About";
import TeamList from "@/libs/pages/teamactum/teamList/TeamList";

import StructureData from "@/shared/components/structure_data_tamplate/StructureData";
import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

const {
  API_COMPANY_PAGE,
  QUERY_COMPANY_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
  API_LOCALIZATION,
} = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_COMPANY_PAGE, API_LOCALIZATION);
}

export default async function Team() {
  const {
    data: {
      attributes: { Hero: hero, Description: desk, Items: items, wrapper, seo },
    },
  } = await getStaticPage(
    API_COMPANY_PAGE,
    QUERY_COMPANY_PAGE,
    API_LOCALIZATION
  );

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM, API_LOCALIZATION);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero type={"home"} {...hero} form={modal} />
      <About {...desk} />
      <TeamList items={items} />
      <Descrition type="classic" {...wrapper} />
    </>
  );
}
