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
import {
  makeDynamicSeoTemplate,
  parseQueryNestedPage,
} from "@/shared/helpers/helpers";
import { styles_enum } from "@/shared/enums/enum";

export async function generateMetadata({ params }) {
  const slugsApi = parseQueryNestedPage(params["name"]);

  return makeDynamicSeoTemplate(...params["slug"], slugsApi);
}

export default async function page({ params }) {
  const slugsApi = parseQueryNestedPage(params["name"]);

  const { data } = await getLawyerDynamicPage(...params["slug"], slugsApi);

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
      page_style,
      seo,
    },
  } = data[0];

  const color = styles_enum[page_style];

  const crimeOrArmy = color === "army" ? color : "crime";

  return (
    <>
      <StructureData data={seo["structuredData"]} />
      <HeroLawyers type={color} {...hero} bread_crumbs={bread_crumbs} />

      <QuestionsList
        type={color}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={crimeOrArmy} listCard={statistics} />
      <SuccessfulBusiness type={color} {...successful_deals} />
      <Specialists type={color} {...employeer_list} />
      <Description type={color} description={description_lawyer} />
      <Response type={color} {...responses} />
      <StepsLawyers type={color} {...steps} />
      <Price type={crimeOrArmy} title={title_price_block} list={price_block} />
      <FormSection type={color} formData={form} {...info} />
    </>
  );
}
