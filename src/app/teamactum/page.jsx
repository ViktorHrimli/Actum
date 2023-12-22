import dynamic from "next/dynamic";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

const Descrition = dynamic(() =>
  import("@/libs/pages/services/components/description/Description")
);
const About = dynamic(() => import("@/shared/components/about/About"));
const TeamList = dynamic(() =>
  import("@/libs/pages/teamactum/teamList/TeamList")
);

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

const {
  API_COMPANY_PAGE,
  QUERY_COMPANY_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
} = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_COMPANY_PAGE);
}

export default async function Team() {
  const {
    data: {
      attributes: {
        Hero: hero,
        Description: desk,
        Items: items,
        wrapper,

        seo,
      },
    },
  } = await getStaticPage(API_COMPANY_PAGE, QUERY_COMPANY_PAGE);

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero type={"home"} {...hero} form={modal} />
      <About {...desk} form={modal} />
      <TeamList type={"family"} items={items} form={modal} />
      <Descrition type="classic" {...wrapper} />
    </>
  );
}
