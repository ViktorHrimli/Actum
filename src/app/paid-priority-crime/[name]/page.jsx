import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/shared/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getLawyerDynamicPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_CRIME_PAGE, API_CRIME_SERVICES } = process.env;

export async function generateMetadata({ params, searchParams }, parent) {
  return makeSeoTemplate(API_CRIME_PAGE);
}

export default async function page({ params }) {
  const { data } = await getLawyerDynamicPage(
    params["name"],
    API_CRIME_SERVICES
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
      seo,
    },
  } = data[0];

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <HeroLawyers type={"crime"} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={"crime"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"crime"} listCard={statistics} />
      <SuccessfulBusiness type={"crime"} {...successful_deals} />
      <Specialists type={"crime"} {...employeer_list} />
      <Description type={"crime"} description={description_lawyer} />
      <Response type={"crime"} {...responses} />
      <StepsLawyers type={"crime"} {...steps} />
      <Price type={"crime"} />
      <FormSection type={"crime"} formData={form} {...info} />
    </>
  );
}
