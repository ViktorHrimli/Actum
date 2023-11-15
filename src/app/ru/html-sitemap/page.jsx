import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

import hero_img from "@/assets/svg/sitemap_hero.png";
import SiteMap from "@/shared/components/siteMap/siteMap";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getStaticPage } from "@/shared/services/api/api";

const { API_SITE_MAP_PAGE, QUERY_SITE_MAP_PAGE } = process.env;

export default async function page() {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getStaticPage(API_SITE_MAP_PAGE, QUERY_SITE_MAP_PAGE);
  return (
    <>
      <NestedHero img={hero_img} {...hero} />
      <SiteMap />
    </>
  );
}
