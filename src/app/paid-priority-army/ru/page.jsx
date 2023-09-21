import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Descrition from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/pages/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function PaidArmy() {
  return (
    <>
      <ContactPanel type={"army"} locale="ru" />
      <HeroLawyers type={"army"} locale="ru" />
      <QuestionsList type={"army"} locale="ru" />
      <AboutCards type={"army"} locale="ru" />
      <SuccessfulBusiness type={"army"} locale="ru" />
      <Specialists type={"army"} locale="ru" />
      <Descrition type={"army"} locale="ru" />
      <Response type={"army"} locale="ru" />
      <StepsLawyers locale="ru" />
      <Price type={"army"} locale="ru" />
      <FormSection type={"army"} locale="ru" />
    </>
  );
}
