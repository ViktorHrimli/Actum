import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import FormSection from "@/shared/components/formSection/FormSection";

import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

const { API_BOOK_PAGE, QUERY_BOOK_PAGE } = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_BOOK_PAGE);
}

export default async function Book() {
  const {
    data: {
      attributes: { Hero: hero, Form: form, Info: info, seo, Steps: steps },
    },
  } = await getStaticPage(API_BOOK_PAGE, QUERY_BOOK_PAGE);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero type={"home"} {...hero} />
      <StepsLawyers type="family" {...steps} />
      <FormSection type="family" formData={form} {...info} />
    </>
  );
}
