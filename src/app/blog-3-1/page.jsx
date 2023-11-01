import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import Publics from "@/libs/pages/publics/Publics";
import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getBlogPage } from "@/shared/services/api/api";

import publics_img from "@/assets/svg/publics_hero.png";

export default async function PaidArmy() {
  const {
    data: {
      attributes: { Hero: hero, Blog_List: blog_list },
    },
  } = await getBlogPage();

  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} img={publics_img} {...hero} />
      <Publics blog_list={blog_list} />
    </>
  );
}
