import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Descrition from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/pages/components/formSection/FormSection";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function PaidArmy() {
  return (
    <>
      <HeroLawyers type={"army"} />
      <AboutCards type={"army"} />
      <SuccessfulBusiness type={"army"} />
      <Specialists type={"army"} />
      <Descrition type={"army"} />
      <Response type={"army"} />
      <StepsLawyers />
      <FormSection type={"army"} />
    </>
  );
}
