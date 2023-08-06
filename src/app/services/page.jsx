import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";
import AboutServices from "@/libs/pages/services/components/about/AboutServices";

import ServiceHero from "@/libs/pages/services/components/hero/ServiceHero";
import Lawyers from "@/libs/pages/services/components/lawyers/Lawyers";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function Services() {
  return (
    <>
      <ServiceHero />
      <AboutServices />
      <Lawyers />
    </>
  );
}
