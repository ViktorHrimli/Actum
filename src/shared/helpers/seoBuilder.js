import { getSeo, getSeoDynamicPage } from "@/shared/services/api/api";

const makeSeoTemplate = async (api_name, locale = "uk") => {
  let alt = {};
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(api_name, locale);

  if (seo["alternatedLink"]) {
    seo["alternatedLink"].forEach((item) => (alt[item.hrefLang] = item.href));
  }

  var robotsPremissions = seo["metaRobotsIndex"];

  const alternates = {
    canonical: seo["canonicalURL"],
    languages: alt,
  };

  return {
    title: seo["metaTitle"],
    description: seo["metaDescription"],
    name: "viewport",
    content: seo["metaViewport"],
    keywords: seo["keywords"],
    alternates,
    robots: {
      index: robotsPremissions ? true : false,
      follow: robotsPremissions ? true : false,
      nocache: true,
    },
    openGraph: {
      title: seo["metaTitle"],
      description: seo["metaDescription"],
      url: seo["canonicalURL"],
      type: "website",
      locale: "uk-UA",
      images: seo["metaImage"]["data"]["attributes"]["url"],
    },
  };
};

const makeDynamicSeoTemplate = async (api, path, locale = "uk") => {
  const { data } = await getSeoDynamicPage(api, path, locale);
  let alt = {};

  const {
    attributes: { seo },
  } = data[0];

  if (seo["alternatedLink"]) {
    seo["alternatedLink"].forEach((item) => (alt[item.hrefLang] = item.href));
  }

  var robotsPremissions = seo["metaRobotsIndex"];

  const alternates = {
    canonical: seo["canonicalURL"],
    languages: alt,
  };

  return {
    title: seo["metaTitle"],
    description: seo["metaDescription"],
    name: "viewport",
    content: seo["metaViewport"],
    keywords: seo["keywords"],
    alternates,
    robots: {
      index: robotsPremissions ? true : false,
      follow: robotsPremissions ? true : false,
      nocache: true,
    },
    openGraph: {
      title: seo["metaTitle"],
      description: seo["metaDescription"],
      url: seo["canonicalURL"],
      type: "website",
      locale: "uk-UA",
      images: seo["metaImage"]["data"]["attributes"]["url"],
    },
  };
};

export { makeSeoTemplate, makeDynamicSeoTemplate };
