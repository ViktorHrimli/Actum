import Publics from "@/libs/pages/publics/Publics";
import NestedHero from "@/shared/components/nestedPageHero/NestedHero";

import publics_img from "@/assets/svg/publics_hero.png";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { getBlogPage, getSeo } from "@/shared/services/api/api";

export async function generateMetadata({ params, searchParams }, parent) {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(process.env["API_BLOG_PAGE"]);

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
      attributes: { Hero: hero, Blog_List: blog_list, seo },
    },
  } = await getBlogPage("ru");
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
      <NestedHero type={"home"} img={publics_img} {...hero} />
      <Publics blog_list={blog_list} />
    </>
  );
}
