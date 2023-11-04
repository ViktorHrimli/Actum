import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/components/stepLawyers/StepsLawyers";
import Descrition from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getArmyPage } from "@/shared/services/api/api";

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
  } = await getArmyPage();
  return (
    <>
      <ContactPanel type={"army"} />
      <HeroLawyers type={"army"} {...hero} {...bread_crumbs} />
      <QuestionsList
        type={"army"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"army"} />
      <SuccessfulBusiness type={"army"} />
      <Specialists type={"army"} {...employeer_list} />
      <Descrition type={"army"} description={description_lawyer} />
      <Response type={"army"} {...responses} />
      <StepsLawyers type={"army"} />
      <Price type={"army"} />
      <FormSection type={"army"} formData={form} {...info} />
    </>
  );
}
