import dynamic from "next/dynamic";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

const FormSection = dynamic(() =>
  import("@/shared/components/formSection/FormSection")
);
const StepsLawyers = dynamic(() =>
  import("@/shared/components/stepLawyers/StepsLawyers")
);

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

const { API_BOOK_PAGE, QUERY_BOOK_PAGE, API_LOCALIZATION } = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_BOOK_PAGE, API_LOCALIZATION);
}

export default async function Book() {
  const {
    data: {
      attributes: { Hero: hero, Form: form, Info: info, seo, Steps: steps },
    },
  } = await getStaticPage(API_BOOK_PAGE, QUERY_BOOK_PAGE, API_LOCALIZATION);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero type={"home"} {...hero} />
      <StepsLawyers type="family" {...steps} />
      <FormSection type="family" formData={form} {...info} />
    </>
  );
}
