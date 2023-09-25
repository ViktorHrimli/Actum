import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";

import hero_img from "@/assets/svg/sitemap_hero.png";
import SiteMap from "@/libs/pages/components/siteMap/siteMap";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function page() {
  return (
    <>
      <NestedHero img={hero_img} text={"мапа сайта"} />
      <SiteMap />
    </>
  );
}
