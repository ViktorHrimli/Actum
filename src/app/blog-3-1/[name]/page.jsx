import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Path from "@/shared/components/path/Path";
import CurrentPublication from "@/libs/components/currentPublication/CurrentPublication";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import hero_public from "@/assets/svg/publications_hero.png";

import { getBlogPage, getBlogPublication } from "@/shared/services/api/api";

export default async function page({ params }) {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getBlogPage();

  const {
    data: [dataObj],
  } = await getBlogPublication(params["name"]);

  const { bread_crumbs, button, Blog: blog } = dataObj["attributes"]["Topic"];

  return (
    <>
      <NestedHero img={hero_public} {...hero} />
      <ContactPanel type={"home"} />
      <Path
        path={bread_crumbs["name_page"]}
        type="family_color"
        back={bread_crumbs["path"]}
        text={bread_crumbs["back"]}
      />
      <CurrentPublication button={button} {...blog} />
    </>
  );
}
