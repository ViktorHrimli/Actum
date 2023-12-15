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

import { getLawyerDynamicPage } from "@/shared/services/api/api";
import { makeDynamicSeoTemplate } from "@/shared/helpers/helpers";

const { API_OTHER_PAGE, API_LOCALIZATION } = process.env;

export async function generateMetadata({ params }) {
  return makeDynamicSeoTemplate(params["name"], API_OTHER_PAGE);
}

export default async function page({ params }) {
  const { data } = await getLawyerDynamicPage(
    params["name"],
    API_OTHER_PAGE,
    API_LOCALIZATION
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
      Steps: steps,
      successful_deals,
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
      <SuccessfulBusiness type={"family"} {...successful_deals} />
      <Specialists type={"family"} {...employeer_list} />
      <Descrition type={"family"} description={description_lawyer} />
      <Response type={"family"} {...responses} />
      <StepsLawyers type={"family"} {...steps} />
      <FormSection type={"family"} formData={form} {...info} />
    </>
  );
}
