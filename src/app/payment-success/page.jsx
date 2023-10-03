import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";

import hero_img from "@/assets/svg/payment-success.png";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function Page() {
  return (
    <>
      <ContactPanel type={"home"} />
      <NestedHero img={hero_img} text={"Ваша оплата успішна"} paragraph={"Дякуємо за довіру. Ви на вірному шляху для вирішення своєї справи. Очікуйте від нас повідомлень по визначеному каналу зв’язку."} />
    </>
  );
}