import dynamic from "next/dynamic";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

const CurrentPublication = dynamic(() =>
  import("@/libs/pages/publics/currentPublication/CurrentPublication")
);

const Path = dynamic(() => import("@/shared/components/path/Path"));

import { getStaticPage, getBlogPublication } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_BLOG_PAGE, QUERY_BLOG_PAGE, API_LOCALIZATION, QUERY_MODAL_FORM, API_MODAL_FORM,} = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_BLOG_PAGE);
}

export default async function page({ params }) {
  const {
    data: {
      attributes: { Hero: hero, seo },
    },
  } = await getStaticPage(API_BLOG_PAGE, QUERY_BLOG_PAGE, API_LOCALIZATION);

  const {
    data: [dataObj],
  } = await getBlogPublication(params["name"].toLowerCase(), API_LOCALIZATION);

    const {
    data: {
      attributes: { Form: modal },
    },
    } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);
  
  const { bread_crumbs, button, Blog: blog } = dataObj["attributes"]["Topic"];

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero {...hero} />
      <Path type="family_color" {...bread_crumbs} />
      <CurrentPublication button={button} {...blog} type={"family"} form={modal} />
    </>
  );
}
