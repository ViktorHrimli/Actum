import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/pages/components/formSection/FormSection";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function Crimes() {
  return (
    <>
      <ContactPanel type={"crime"}/>
      <HeroLawyers type={"crime"} />
      <QuestionsList type={"crime"}/>
      <AboutCards type={"crime"} />
      <SuccessfulBusiness type={"crime"} />
      <Specialists type={"crime"} />
      <Description type={"crime"} />
      <Response type={"crime"} />
      <StepsLawyers />
      <FormSection type={"crime"} />
    </>
  );
}
