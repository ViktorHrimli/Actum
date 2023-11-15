import Publics from "@/libs/pages/publics/Publics";
import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

import publics_img from "@/assets/svg/publics_hero.png";

const { API_BLOG_PAGE, QUERY_BLOG_PAGE } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_BLOG_PAGE);
}

export default async function page() {
  const {
    data: {
      attributes: { Hero: hero, Blog_List: blog_list, seo },
    },
  } = await getStaticPage(API_BLOG_PAGE, QUERY_BLOG_PAGE);

  return (
    <>
      <StructureData data={seo["structuredData"]} />
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} img={publics_img} {...hero} />
      <Publics blog_list={blog_list} />
    </>
  );
}
