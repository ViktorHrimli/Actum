import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Path from "@/shared/components/path/Path";
import CurrentPublication from "@/libs/pages/publics/currentPublication/CurrentPublication";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage, getBlogPublication } from "@/shared/services/api/api";
import { makeDynamicSeoTemplateTopicBlogs } from "@/shared/helpers/helpers";

const { API_BLOG_PAGE, QUERY_BLOG_PAGE, API_MODAL_FORM, QUERY_MODAL_FORM } =
  process.env;

export async function generateMetadata({ params }) {
  return makeDynamicSeoTemplateTopicBlogs(params["name"].toLowerCase(), "uk");
}

export default async function page({ params }) {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getStaticPage(API_BLOG_PAGE, QUERY_BLOG_PAGE);

  const {
    data: [dataObj],
  } = await getBlogPublication(params["name"].toLowerCase());

  const { bread_crumbs, button, Blog: blog } = dataObj["attributes"]["Topic"];

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);

  return (
    <>
      <StructureData data={dataObj["attributes"]["seo"]["structuredData"]} />

      <NestedHero type="family" {...hero} form={modal} />
      <Path type="family_color" {...bread_crumbs} />
      <CurrentPublication
        type="family"
        button={button}
        {...blog}
        form={modal}
      />
    </>
  );
}
