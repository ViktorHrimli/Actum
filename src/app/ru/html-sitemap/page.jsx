import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

import hero_img from "@/assets/svg/sitemap_hero.png";
import SiteMap from "@/libs/pages/components/siteMap/siteMap";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getSiteMapPage } from "@/shared/services/api/api";

export default async function page() {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getSiteMapPage("ru");
  return (
    <>
      <NestedHero img={hero_img} {...hero} />
      <SiteMap />
    </>
  );
}
