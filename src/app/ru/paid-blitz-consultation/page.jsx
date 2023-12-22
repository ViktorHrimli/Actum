import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

const Specialists = dynamic(() =>
  import("@/libs/pages/components/specialists/Specialists")
);
const AboutCards = dynamic(() =>
  import("@/libs/pages/components/aboutCards/AboutCards")
);
const Price = dynamic(() => import("@/libs/pages/components/priceCards/Price"));
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

const { API_BLITZ_CONSULTATION, API_LOCALIZATION } = process.env;

export async function generateMetadata() {
  return await makeSeoTemplate(API_BLITZ_CONSULTATION, API_LOCALIZATION);
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
  } = await getStaticLawyersPage(API_BLITZ_CONSULTATION, API_LOCALIZATION);

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
