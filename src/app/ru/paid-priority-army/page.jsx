import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import Descrition from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/shared/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getStaticLawyersPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_ARMY_PAGE } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_ARMY_PAGE);
}

export default async function PaidArmy() {
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
  } = await getStaticLawyersPage(API_ARMY_PAGE);

  return (
    <>
      <StructureData data={seo["structuredData"]} />
      <ContactPanel type={"army"} />
      <HeroLawyers type={"army"} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={"army"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"army"} />
      <SuccessfulBusiness type={"army"} />
      <Specialists type={"army"} {...employeer_list} />
      <Descrition type={"army"} description={description_lawyer} />
      <Response type={"army"} {...responses} />
      <StepsLawyers type={"army"} />
      <Price type={"army"} />
      <FormSection type={"army"} formData={form} {...info} />
    </>
  );
}
