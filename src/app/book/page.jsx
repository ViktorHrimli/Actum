import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import FormSection from "@/libs/pages/components/formSection/FormSection";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { getBookPage } from "@/shared/services/api/api";

import heroBook from "@/assets/svg/book_hero.png";

export default async function Book() {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getBookPage();

  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} img={heroBook} {...hero} />
      <StepsLawyers type="family" />
      <FormSection type="family" />
    </>
  );
}
