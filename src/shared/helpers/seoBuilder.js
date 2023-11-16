import { getSeo } from "@/shared/services/api/api";

import logo from "@/assets/svg/LOGO.png";

const makeSeoTemplate = async (api_name) => {
  const {
    data: {
      attributes: { seo },
    },
  } = await getSeo(api_name);

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

export { makeSeoTemplate };
