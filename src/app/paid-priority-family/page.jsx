import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";


export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function Family() {
  return (
    <>
      <HeroLawyers type={"family"} />
      <Description type={"family"} />
      <Response />
      <StepsLawyers />
    </>
  );
}
