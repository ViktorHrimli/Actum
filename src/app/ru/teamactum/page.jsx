import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Descrition from "@/libs/pages/services/components/description/Description";
import About from "@/libs/components/about/About";
import TeamList from "@/libs/pages/teamactum/teamList/TeamList";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import ourTeam from "@/assets/svg/our_team.png";
import our_team_about from "@/assets/svg/our_team_about.png";

import { getCompanyPage, getSeo } from "@/shared/services/api/api";

export async function generateMetadata({ params, searchParams }, parent) {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(process.env["API_COMPANY_PAGE"]);

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

export default async function Team() {
  const {
    data: {
      attributes: { Hero: hero, Description: desk, Items: items, wrapper, seo },
    },
  } = await getCompanyPage("ru");

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
      <NestedHero type={"home"} img={ourTeam} {...hero} />
      <About img={our_team_about} {...desk} />
      <TeamList items={items} />
      <Descrition type="classic" {...wrapper} />
    </>
  );
}
