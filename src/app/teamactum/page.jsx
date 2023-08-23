import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";
import Descrition from "@/libs/pages/services/components/description/Description";
import About from "@/libs/pages/components/about/About";

import ourTeam from "@/assets/svg/our_team.png";
import our_team_about from "@/assets/svg/our_team_about.png";

export default function Team() {
  return (
    <>
      <NestedHero text="НАША КОМАНДА" img={ourTeam} />
      <About img={our_team_about} />
      <Descrition type="classic" />
    </>
  );
}
