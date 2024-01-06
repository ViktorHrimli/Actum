import dynamic from "next/dynamic";

import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

const Specialists = dynamic(() =>
  import("@/libs/pages/components/specialists/Specialists")
);
const StepsLawyers = dynamic(() =>
  import("@/shared/components/stepLawyers/StepsLawyers")
);
const Description = dynamic(() =>
  import("@/libs/pages/services/components/description/Description")
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const SuccessfulBusiness = dynamic(() =>
  import("@/libs/pages/components/successfulBusiness/SuccessfulBusiness")
);
const QuestionsList = dynamic(() =>
  import("@/libs/pages/components/QuestionList/QuestionsList")
);
const FormSection = dynamic(() =>
  import("@/shared/components/formSection/FormSection")
);

import { getStaticLawyersPage } from "@/shared/services/api/api";
import { makeSeoTemplate } from "@/shared/helpers/helpers";

const { API_ARMY_PAGE, API_LOCALIZATION } = process.env;

export async function generateMetadata() {
  return await makeSeoTemplate(API_ARMY_PAGE, API_LOCALIZATION);
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
        Steps: steps,
        successful_deals,
        seo,
      },
    },
  } = await getStaticLawyersPage(API_ARMY_PAGE, API_LOCALIZATION);

  console.log(about_block);

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <HeroLawyers type={"army"} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={"army"}
        about_block={about_block}
        questions={questions_list}
      />
      <SuccessfulBusiness type={"army"} {...successful_deals} />
      <Specialists type={"army"} {...employeer_list} />
      <Description type={"army"} description={description_lawyer} />
      <Response type={"army"} {...responses} />
      <StepsLawyers type={"army"} {...steps} />
      <FormSection type={"army"} formData={form} {...info} />
    </>
  );
}
