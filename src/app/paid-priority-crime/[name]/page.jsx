import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getCrimePage } from "@/shared/services/api/api";

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
      },
    },
  } = await getCrimePage();
  return (
    <>
      <ContactPanel type={"crime"} />
      <HeroLawyers type={"crime"} {...hero} {...bread_crumbs} />
      <QuestionsList
        type={"crime"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"crime"} />
      <SuccessfulBusiness type={"crime"} />
      <Specialists type={"crime"} {...employeer_list} />
      <Description type={"crime"} description={description_lawyer} />
      <Response type={"crime"} {...responses} />
      <StepsLawyers type={"crime"} />
      <Price type={"crime"} />
      <FormSection type={"crime"} formData={form} {...info} />
    </>
  );
}
