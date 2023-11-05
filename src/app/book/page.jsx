import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import StepsLawyers from "@/libs/components/stepLawyers/StepsLawyers";
import FormSection from "@/libs/components/formSection/FormSection";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { getBookPage, getSeo } from "@/shared/services/api/api";

import heroBook from "@/assets/svg/book_hero.png";

export async function generateMetadata({ params, searchParams }, parent) {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(process.env["API_BOOK_PAGE"]);

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

export default async function Book() {
  const {
    data: {
      attributes: { Hero: hero, Form: form, Info: info, seo },
    },
  } = await getBookPage();
  console.log(seo);
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
      <ContactPanel type={"home"} />
      <NestedHero type={"home"} img={heroBook} {...hero} />
      <StepsLawyers type="family" />
      <FormSection type="family" formData={form} {...info} />
    </>
  );
}
