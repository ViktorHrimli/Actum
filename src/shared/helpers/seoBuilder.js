import { getSeo, getSeoDynamicPage } from "@/shared/services/api/api";

import logo from "@/assets/svg/LOGO.png";

const makeSeoTemplate = async (api_name, locale = "uk") => {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(api_name, locale);

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
      images: seo["metaImage"]["data"]["attributes"]["url"] ?? logo,
    },
  };
};

const makeDynamicSeoTemplate = async (api, path) => {
  const { data } = await getSeoDynamicPage(api, path);

  const {
    attributes: { seo },
  } = data[0];

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
      images: seo["metaImage"]["data"]["attributes"]["url"] ?? logo,
    },
  };
};

export { makeSeoTemplate, makeDynamicSeoTemplate };
