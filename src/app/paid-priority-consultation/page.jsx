import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/shared/components/formSection/FormSection";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import Price from "@/libs/pages/components/priceCards/Price";

import { getStaticLawyersPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_CONSULTATION_JURIST } = process.env;

export async function generateMetadata() {
  return makeSeoTemplate(API_CONSULTATION_JURIST);
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
        statistics,
        Steps: steps,
        successful_deals,
        price_block,
        title_price_block,
        seo,
      },
    },
  } = await getStaticLawyersPage(API_CONSULTATION_JURIST);

  return (
    <>
      <StructureData data={seo["structuredData"]} />
      <HeroLawyers type={"other"} {...hero} bread_crumbs={bread_crumbs} />

      <QuestionsList
        type={"other"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"crime"} listCard={statistics} />
      <SuccessfulBusiness type={"other"} {...successful_deals} />
      <Specialists type={"other"} {...employeer_list} />
      <Description type={"other"} description={description_lawyer} />
      <Response type={"other"} {...responses} />
      <StepsLawyers type={"other"} {...steps} />
      <Price type={"crime"} title={title_price_block} list={price_block} />
      <FormSection type={"other"} formData={form} {...info} />
    </>
  );
}
