import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import hero_img from "@/assets/svg/payment-success.png";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getPaymentPage } from "@/shared/services/api/api";

export default async function Page() {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getPaymentPage();
  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero img={hero_img} {...hero} />
    </>
  );
}
