import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import ContactHero from "@/assets/svg/ContactHero.png";

import Contacts from "@/libs/pages/contacts/contacts/Contacts";

import { getContactsPage } from "@/shared/services/api/api";

export default async function Conacts() {
  const {
    data: {
      attributes: { Hero: hero, Info: info, Social: social, button },
    },
  } = await getContactsPage();

  return (
    <>
      <NestedHero type={"home"} {...hero} img={ContactHero} />
      <Contacts {...info} social_list={social} button={button} />
    </>
  );
}
