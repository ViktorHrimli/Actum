import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

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
