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

import { getLawyerDynamicPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_FAMILY_SERVICES, API_FAMILY_PAGE } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_FAMILY_PAGE);
}

export default async function page({ params, searchParams }) {
  console.log(params);
  const { data } = await getLawyerDynamicPage(
    params["slug"],
    searchParams["api"]
  );

  const {
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
  } = data[0];

  return (
    <>
      <StructureData data={seo["structuredData"]} />
      <HeroLawyers type={"family"} {...hero} bread_crumbs={bread_crumbs} />

      <QuestionsList
        type={"family"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"family"} listCard={statistics} />
      <SuccessfulBusiness type={"family"} {...successful_deals} />
      <Specialists type={"family"} {...employeer_list} />
      <Description type={"family"} description={description_lawyer} />
      <Response type={"family"} {...responses} />
      <StepsLawyers type={"family"} {...steps} />
      <Price type={"crime"} title={title_price_block} list={price_block} />
      <FormSection type={"family"} formData={form} {...info} />
    </>
  );
}
