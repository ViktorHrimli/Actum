import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/pages/components/formSection/FormSection";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export const metadata = {
  title: META_DATA_TITLE,
  description: META_DATA_DESCRIPTION,
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  keywords: "actum",
};

export default function page() {
  return (
    <>
      <ContactPanel type={"family"} />
      <HeroLawyers type={"family"} />
      <QuestionsList type={"family"} />
      <SuccessfulBusiness type={"family"} />
      <Specialists type={"family"} />
      <Description type={"family"} />
      <Response type={"family"} />
      <StepsLawyers />
      <FormSection type={"family"} />
    </>
  );
}
