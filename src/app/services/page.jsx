import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import AboutServices from "@/libs/pages/services/components/about/AboutServices";
import Descrition from "@/libs/pages/services/components/description/Description";
import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Lawyers from "@/libs/pages/services/components/lawyers/Lawyers";

import service_back_photo from "@/assets/svg/service_back_photo.png";

import { getServicePage, getSeo } from "@/shared/services/api/api";

export async function generateMetadata({ params, searchParams }, parent) {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(process.env["API_SERVICE_PAGE"]);

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
        seo,
      },
    },
  } = await getServicePage();

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
      <NestedHero type={"home"} {...hero} img={service_back_photo} />
      <AboutServices type={"home"} list={services_blocks} title={desk_title} />
      <Lawyers
        type={"home"}
        list={list}
        title={desk_service}
        desk={desk_list}
        button={button}
      />
      <Descrition type="classic" description={desk_somthing} />
    </>
  );
}
