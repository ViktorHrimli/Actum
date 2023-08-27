import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";
import ContactHero from "@/assets/svg/ContactHero.png";

import  Contacts  from "@/libs/pages/contacts/contacts/Contacts";

export default function Conacts() {
  return (
    <>
      <NestedHero text="контакти" img={ContactHero} />
      <Contacts />
    </>
  );
}