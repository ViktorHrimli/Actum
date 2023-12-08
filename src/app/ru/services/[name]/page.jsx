import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/shared/components/formSection/FormSection";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getLawyerDynamicPage } from "@/shared/services/api/api";
import { makeDynamicSeoTemplate } from "@/shared/helpers/helpers";
import { styles_enum } from "@/shared/enums/enum";

const { API_SERVICES_COMUNITY } = process.env;

export async function generateMetadata({ params }) {
  return await makeDynamicSeoTemplate(params["name"], API_SERVICES_COMUNITY);
}

export default async function page({ params }) {
  const { data } = await getLawyerDynamicPage(
    params["name"],
    API_SERVICES_COMUNITY
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
      page_style,
      seo,
    },
  } = data[0];

  const color = styles_enum[page_style];

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <HeroLawyers type={color} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={color}
        about_block={about_block}
        questions={questions_list}
      />
      <SuccessfulBusiness type={color} {...successful_deals} />
      <Specialists type={color} {...employeer_list} />
      <Description type={color} description={description_lawyer} />
      <Response type={color} {...responses} />
      <StepsLawyers type={color} {...steps} />
      <FormSection type={color} formData={form} {...info} />
    </>
  );
}
