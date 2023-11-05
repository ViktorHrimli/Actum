import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";

import { getCrimePage, getSeo } from "@/shared/services/api/api";

export async function generateMetadata({ params, searchParams }, parent) {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(process.env["API_CRIME_PAGE"]);

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
export default async function page() {
  const {
    data: {
      attributes: {
        Hero: hero,
        about_block,
        Employeers_list: employeer_list,
        Form: form,
        Info: info,
        Responses: responses,
        questions_list,
        bread_crumbs,
        description_lawyer,
        seo,
      },
    },
  } = await getCrimePage();

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
      <ContactPanel type={"crime"} />
      <HeroLawyers type={"crime"} {...hero} {...bread_crumbs} />
      <QuestionsList
        type={"crime"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"crime"} />
      <SuccessfulBusiness type={"crime"} />
      <Specialists type={"crime"} {...employeer_list} />
      <Description type={"crime"} description={description_lawyer} />
      <Response type={"crime"} {...responses} />
      <StepsLawyers type={"crime"} />
      <Price type={"crime"} />
      <FormSection type={"crime"} formData={form} {...info} />
    </>
  );
}
