import dynamic from "next/dynamic";

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
import { getLawyerDynamicPage } from "@/shared/services/api/api";
import { makeDynamicSeoTemplate } from "@/shared/helpers/helpers";

const { API_ARMY_SERVICES } = process.env;

export async function generateMetadata({ params }) {
  return await makeDynamicSeoTemplate(
    params["name"].toLowerCase(),
    API_ARMY_SERVICES
  );
}

export default async function page({ params }) {
  const { data } = await getLawyerDynamicPage(
    params["name"].toLowerCase(),
    API_ARMY_SERVICES
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

      <HeroLawyers type={"army"} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={"army"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"army"} listCard={statistics} />
      <SuccessfulBusiness type={"army"} {...successful_deals} />
      <Specialists type={"army"} {...employeer_list} />
      <Description type={"army"} description={description_lawyer} />
      <Response type={"army"} {...responses} />
      <StepsLawyers type={"army"} {...steps} />
      <Price type={"army"} list={price_block} title={title_price_block} />
      <FormSection type={"army"} formData={form} {...info} />
    </>
  );
}
