import { getSeo, getSeoDynamicPage } from "@/shared/services/api/api";

import logo from "@/assets/svg/LOGO.png";

const makeSeoTemplate = async (api_name, locale = "uk") => {
  let alt = {};
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(api_name, locale);

  seo["metaLinks"].forEach((item) => (alt[item.hrefLang] = item.href));

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
    openGraph: {
      title: seo["metaTitle"],
      description: seo["metaDescription"],
      url: seo["canonicalURL"],
      type: "website",
      locale: "uk-UA",
      images: seo["metaImage"]["data"]["attributes"]["url"] ?? logo,
    },
  };
};

const makeDynamicSeoTemplate = async (api, path, locale = "uk") => {
  const { data } = await getSeoDynamicPage(api, path, locale);
  let alt = {};

  const {
    attributes: { seo },
  } = data[0];

  seo["metaLinks"].forEach((item) => (alt[item.hrefLang] = item.href));

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
    openGraph: {
      title: seo["metaTitle"],
      description: seo["metaDescription"],
      url: seo["canonicalURL"],
      type: "website",
      locale: "uk-UA",
      images: seo["metaImage"]["data"]["attributes"]["url"] ?? logo,
    },
  };
};

export { makeSeoTemplate, makeDynamicSeoTemplate };
