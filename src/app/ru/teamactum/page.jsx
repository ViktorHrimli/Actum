import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Descrition from "@/libs/pages/services/components/description/Description";
import About from "@/libs/components/about/About";
import TeamList from "@/libs/pages/teamactum/teamList/TeamList";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import ourTeam from "@/assets/svg/our_team.png";
import our_team_about from "@/assets/svg/our_team_about.png";

import { getCompanyPage } from "@/shared/services/api/api";

export default async function Team() {
  const {
    data: {
      attributes: { Hero: hero, Description: desk, Items: items, wrapper },
    },
  } = await getCompanyPage("ru");

  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} img={ourTeam} {...hero} />
      <About img={our_team_about} {...desk} />
      <TeamList items={items} />
      <Descrition type="classic" {...wrapper} />
    </>
  );
}
