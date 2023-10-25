import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import AboutServices from "@/libs/pages/services/components/about/AboutServices";
import Descrition from "@/libs/pages/services/components/description/Description";
import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Lawyers from "@/libs/pages/services/components/lawyers/Lawyers";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getServicePage } from "@/shared/services/api/api";

import service_back_photo from "@/assets/svg/service_back_photo.png";

export default async function Services() {
  const {
    data: {
      attributes: {
        Hero: hero,
        services_blocks,
        List: list,
        desk_service,
        desk_list,
        desk_somthing,
        desk_title,
        button,
      },
    },
  } = await getServicePage("ru");

  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} {...hero} img={service_back_photo} />
      <AboutServices type={"home"} list={services_blocks} title={desk_title} />
      <Lawyers
        type={"home"}
        list={list}
        title={desk_service}
        desk={desk_list}
        button={button}
      />
      <Descrition type="classic" title={desk_somthing} />
    </>
  );
}
