import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

import hero_img from "@/assets/svg/payment-success.png";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getStaticPage } from "@/shared/services/api/api";

const { API_PAYMENT_PAGE, QUERY_PAYMENT_PAGE, API_LOCALIZATION } = process.env;

export default async function Page() {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getStaticPage(
    API_PAYMENT_PAGE,
    QUERY_PAYMENT_PAGE,
    API_LOCALIZATION
  );

  return (
    <>
      <NestedHero img={hero_img} {...hero} form={{}} />
    </>
  );
}
