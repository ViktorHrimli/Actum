import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/components/formSection/FormSection";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export const metadata = {
  title: META_DATA_TITLE,
  description: META_DATA_DESCRIPTION,
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  keywords: "actum",
};

import { getFamilyPage } from "@/shared/services/api/api";

export default async function Family() {
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
  } = await getFamilyPage();
  return (
    <>
      <ContactPanel type={"family"} />
      <HeroLawyers type={"family"} {...hero} {...bread_crumbs} />
      <QuestionsList
        type={"family"}
        about_block={about_block}
        questions={questions_list}
      />
      <SuccessfulBusiness type={"family"} />
      <Specialists type={"family"} {...employeer_list} />
      <Description type={"family"} description={description_lawyer} />
      <Response type={"family"} {...responses} />
      <StepsLawyers type={"family"} />
      <FormSection type={"family"} formData={form} {...info} />
    </>
  );
}
