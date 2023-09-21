import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import AboutServices from "@/libs/pages/services/components/about/AboutServices";
import Descrition from "@/libs/pages/services/components/description/Description";
import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";
import Lawyers from "@/libs/pages/services/components/lawyers/Lawyers";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import service_back_photo from "@/assets/svg/service_back_photo.png";

export default function Services() {
  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} text="Наши услуги" img={service_back_photo} />
      <AboutServices locale={"ru"} />
      <Lawyers locale={"ru"} />
      <Descrition type="classic" locale={"ru"} />
    </>
  );
}
