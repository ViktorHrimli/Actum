import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Contacts from "@/libs/pages/contacts/contacts/Contacts";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/seoBuilder";

const {
  API_CONTACT_PAGE,
  QUERY_CONTACT_PAGE,
  API_MODAL_FORM,
  QUERY_MODAL_FORM,
  API_LOCALIZATION,
} = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_CONTACT_PAGE, API_LOCALIZATION);
}

export default async function Conacts() {
  const {
    data: {
      attributes: {
        Hero: hero,
        Info: info,
        Social: social,
        button,
        seo,
        city_services,
        city_description,
      },
    },
  } = await getStaticPage(
    API_CONTACT_PAGE,
    QUERY_CONTACT_PAGE,
    API_LOCALIZATION
  );

  const {
    data: {
      attributes: { Form: modal },
    },
  } = await getStaticPage(API_MODAL_FORM, QUERY_MODAL_FORM, API_LOCALIZATION);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <NestedHero type={"home"} {...hero} form={modal} />
      <Contacts
        {...info}
        social_list={social}
        button={button}
        city_description={city_description}
        city_services={city_services}
      />
    </>
  );
}
