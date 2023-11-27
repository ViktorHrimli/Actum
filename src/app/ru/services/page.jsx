import AboutServices from "@/libs/pages/services/components/about/AboutServices";
import Descrition from "@/libs/pages/services/components/description/Description";
import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Lawyers from "@/libs/pages/services/components/lawyers/Lawyers";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

const {
  API_SERVICE_PAGE,
  QUERY_SERVICE_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
} = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_SERVICE_PAGE);
}

export default async function Services() {
  const {
    data: {
      attributes: {
        Hero: hero,
        services_blocks,
        List: list,
        desk_service,
        desk_list,
        desk_somthing,
        desk_title,
        button,
        seo,
      },
    },
  } = await getStaticPage(API_SERVICE_PAGE, QUERY_SERVICE_PAGE);

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero type={"home"} {...hero} form={modal} />
      <AboutServices type={"home"} list={services_blocks} title={desk_title} />
      <Lawyers
        type={"home"}
        list={list}
        title={desk_service}
        desk={desk_list}
        button={button}
      />
      <Descrition type="classic" description={desk_somthing} />
    </>
  );
}
