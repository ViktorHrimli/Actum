import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import Descrition from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/shared/components/formSection/FormSection";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";
import Price from "@/libs/pages/components/priceCards/Price";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";

import { getStaticLawyersPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_ARMY_KRYVIY_RIG, API_LOCALIZATION } = process.env;

export async function generateMetadata() {
  return await makeSeoTemplate(API_ARMY_KRYVIY_RIG, API_LOCALIZATION);
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
        Steps: steps,
        statistics,
        title_price_block,
        price_block,
        successful_deals,
        seo,
      },
    },
  } = await getStaticLawyersPage(API_ARMY_KRYVIY_RIG, API_LOCALIZATION);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <HeroLawyers type={"army"} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={"army"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"army"} listCard={statistics} />
      <SuccessfulBusiness type={"army"} {...successful_deals} />
      <Specialists type={"army"} {...employeer_list} />
      <Descrition type={"army"} description={description_lawyer} />
      <Response type={"army"} {...responses} />
      <StepsLawyers type={"army"} {...steps} />
      <Price type={"army"} list={price_block} title={title_price_block} />
      <FormSection type={"army"} formData={form} {...info} />
    </>
  );
}
