import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import Publics from "@/libs/pages/publics/Publics";
import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

import publics_img from "@/assets/svg/publics_hero.png";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function PaidArmy() {
  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} img={publics_img} text={"публікації"} />
      <Publics />
    </>
  );
}
