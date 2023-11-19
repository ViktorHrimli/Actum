import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/shared/components/formSection/FormSection";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticLawyersPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_REALTY_PAGE } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_REALTY_PAGE);
}

export default async function page() {
  const {
    data: {
      attributes: {
        Hero: hero,
        about_block,
        Employeers_list: employeer_list,
        Form: form,
        Info: info,
        Responses: responses,
        questions_list,
        bread_crumbs,
        description_lawyer,
        seo,
      },
    },
  } = await getStaticLawyersPage(API_REALTY_PAGE);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <ContactPanel type={"home"} />
      <HeroLawyers type={"other"} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={"other"}
        about_block={about_block}
        questions={questions_list}
      />
      <SuccessfulBusiness type={"other"} />
      <Specialists type={"other"} {...employeer_list} />
      <Description type={"other"} description={description_lawyer} />
      <Response type={"other"} {...responses} />
      <StepsLawyers type={"other"} />
      <FormSection type={"other"} formData={form} {...info} />
    </>
  );
}
