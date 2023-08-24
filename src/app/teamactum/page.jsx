import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";
import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";
import ContactHero from "@/assets/svg/ContactHero.png";
import  Contacts  from "@/libs/pages/contacts/contacts/Contacts";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function Team() {
  return(
  <>
      <NestedHero text="контакти" img={ContactHero} />
      <Contacts />
    </>
  )
}
