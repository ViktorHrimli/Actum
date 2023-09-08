import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import Publics from "@/libs/pages/publics/Publics";
import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";

import publics_img from "@/assets/svg/publics_hero.png";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function PaidArmy() {
  return (
    <>
      <NestedHero img={publics_img} text={"публікації"} />
      <Publics />
    </>
  );
}
