import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import FormSection from "@/shared/components/formSection/FormSection";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

import heroBook from "@/assets/svg/book_hero.png";

const { API_BOOK_PAGE, QUERY_BOOK_PAGE } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_BOOK_PAGE);
}

export default async function Book() {
  const {
    data: {
      attributes: { Hero: hero, Form: form, Info: info, seo },
    },
  } = await getStaticPage(API_BOOK_PAGE, QUERY_BOOK_PAGE);

  return (
    <>
      <StructureData data={seo["structuredData"]} />
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} img={heroBook} {...hero} />
      <StepsLawyers type="family" />
      <FormSection type="family" formData={form} {...info} />
    </>
  );
}
