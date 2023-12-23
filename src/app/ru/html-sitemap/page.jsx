import dynamic from "next/dynamic";
import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

const SiteMap = dynamic(() => import("@/shared/components/siteMap/siteMap"));

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getStaticPage } from "@/shared/services/api/api";

const {
  API_SITE_MAP_PAGE,
  QUERY_SITE_MAP_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
  API_LOCALIZATION,
} = process.env;

export default async function page() {
  const {
    data: {
      attributes: { Hero: hero, List_nav: nav, Navigation },
    },
  } = await getStaticPage(
    API_SITE_MAP_PAGE,
    QUERY_SITE_MAP_PAGE,
    API_LOCALIZATION
  );

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM, API_LOCALIZATION);

  return (
    <>
      <NestedHero type={"family"} {...hero} form={modal} />
      <SiteMap list={nav} rootNav={Navigation} />
    </>
  );
}
