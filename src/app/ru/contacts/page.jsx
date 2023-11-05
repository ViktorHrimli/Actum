import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import ContactHero from "@/assets/svg/ContactHero.png";

import Contacts from "@/libs/pages/contacts/contacts/Contacts";

import { getContactsPage, getSeo } from "@/shared/services/api/api";

export async function generateMetadata({ params, searchParams }, parent) {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(process.env["API_CONTACT_PAGE"]);

  return {
    title: seo["metaTitle"],
    description: seo["metaDescription"],
    name: "viewport",
    content: seo["metaViewport"],
    keywords: seo["keywords"],
    openGraph: {
      title: seo["metaTitle"],
      description: seo["metaDescription"],
      url: seo["canonicalURL"],
      type: "website",
      locale: "uk-UA",
      images: seo["metaImage"]["data"]["attributes"]["url"],
    },
  };
}

export default async function Conacts() {
  const {
    data: {
      attributes: { Hero: hero, Info: info, Social: social, button, seo },
    },
  } = await getContactsPage("ru");

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo["structuredData"]),
          }}
        ></script>
      </section>
      <NestedHero type={"home"} {...hero} img={ContactHero} />
      <Contacts social_list={social} button={button} {...info} />
    </>
  );
}
