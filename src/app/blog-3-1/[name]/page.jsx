import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Path from "@/shared/components/path/Path";
import CurrentPublication from "@/libs/components/currentPublication/CurrentPublication";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import hero_public from "@/assets/svg/publications_hero.png";

import {
  getBlogPage,
  getBlogPublication,
  getSeo,
} from "@/shared/services/api/api";

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

export default async function page({ params }) {
  const {
    data: {
      attributes: { Hero: hero, seo },
    },
  } = await getBlogPage();

  const {
    data: [dataObj],
  } = await getBlogPublication(params["name"]);

  const { bread_crumbs, button, Blog: blog } = dataObj["attributes"]["Topic"];

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
      <NestedHero img={hero_public} {...hero} />
      <ContactPanel type={"home"} />
      <Path
        path={bread_crumbs["name_page"]}
        type="family_color"
        back={bread_crumbs["path"]}
        text={bread_crumbs["back"]}
      />
      <CurrentPublication button={button} {...blog} />
    </>
  );
}
