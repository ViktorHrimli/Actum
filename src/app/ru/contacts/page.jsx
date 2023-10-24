import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import ContactHero from "@/assets/svg/ContactHero.png";

import Contacts from "@/libs/pages/contacts/contacts/Contacts";

export default function Conacts() {
  return (
    <>
      <NestedHero type={"home"} text="контакти" img={ContactHero} />
      <Contacts />
    </>
  );
}
