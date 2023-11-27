import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Descrition from "@/libs/pages/services/components/description/Description";
import About from "@/shared/components/about/About";
import TeamList from "@/libs/pages/teamactum/teamList/TeamList";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

const { API_COMPANY_PAGE, QUERY_COMPANY_PAGE } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_COMPANY_PAGE);
}

export default async function Team() {
  const {
    data: {
      attributes: { Hero: hero, Description: desk, Items: items, wrapper, seo },
    },
  } = await getStaticPage(API_COMPANY_PAGE, QUERY_COMPANY_PAGE);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero type={"home"} {...hero} />
      <About {...desk} />
      <TeamList items={items} />
      <Descrition type="classic" {...wrapper} />
    </>
  );
}
