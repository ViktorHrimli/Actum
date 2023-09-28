import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import FormSection from "@/libs/pages/components/formSection/FormSection";

import hero from "@/assets/svg/book_hero.png";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export default function Book() {
  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero
        type={"home"}
        img={hero}
        text="КОНСУЛЬТАЦІЯ АДВОКАТА ОНЛАЙН, В ОФІСІ АБО ДЗВІНКОМ"
      />
      <StepsLawyers type="family" />
      <FormSection type="family" />
    </>
  );
}
