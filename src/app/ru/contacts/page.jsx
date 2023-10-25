import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import ContactHero from "@/assets/svg/ContactHero.png";

import Contacts from "@/libs/pages/contacts/contacts/Contacts";

import { getContactsPage } from "@/shared/services/api/api";

export default async function Conacts() {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getContactsPage("ru");

  return (
    <>
      <NestedHero type={"home"} {...hero} img={ContactHero} />
      <Contacts />
    </>
  );
}
