import dynamic from "next/dynamic";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

const Publics = dynamic(() => import("@/libs/pages/publics/Publics"));

import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const {
  API_BLOG_PAGE,
  QUERY_BLOG_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
  API_LOCALIZATION,
} = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_BLOG_PAGE, API_LOCALIZATION);
}

export default async function page() {
  const {
    data: {
      attributes: { Hero: hero, Blog_List: blog_list, seo },
    },
  } = await getStaticPage(API_BLOG_PAGE, QUERY_BLOG_PAGE, API_LOCALIZATION);

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM, API_LOCALIZATION);

  return (
    <>
      <StructureData data={seo["structuredData"]} />
      <NestedHero type={"home"} {...hero} form={modal} />
      <Publics type={"family"} blog_list={blog_list} />
    </>
  );
}
