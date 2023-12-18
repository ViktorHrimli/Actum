import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

import SiteMap from "@/shared/components/siteMap/siteMap";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const {
  API_SITE_MAP_PAGE,
  QUERY_SITE_MAP_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
} = process.env;

export async function generateMetadata() {
  return await makeSeoTemplate(API_SITE_MAP_PAGE);
}

export default async function page() {
  const {
    data: {
      attributes: { Hero: hero, List_nav: nav, Navigation },
    },
  } = await getStaticPage(API_SITE_MAP_PAGE, QUERY_SITE_MAP_PAGE);

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM);

  return (
    <>
      <NestedHero type={"family"} {...hero} form={modal} />
      <SiteMap list={nav} rootNav={Navigation} />
    </>
  );
}
