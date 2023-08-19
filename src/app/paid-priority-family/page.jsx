import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import Form from "@/libs/pages/components/form/Form";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function Family() {
  return (
    <>
      <HeroLawyers type={"family"} />
      <QuestionsList type={"family"} />
      <SuccessfulBusiness type={"family"} />
      <Specialists type={"family"} />
      <Description type={"family"} />
      <Response type={"family"} />
      <StepsLawyers />
      <Form type={"family"} />
    </>
  );
}
