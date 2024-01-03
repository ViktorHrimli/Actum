import {
  getSeo,
  getSeoDynamicPage,
  getBlogPublication,
} from "@/shared/services/api/api";
import { notFound } from "next/navigation";

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
  var res = await getSeoDynamicPage(api, path, locale);
  if (!res) {
    notFound();
    return {};
  }
  const { data } = res;
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

const makeDynamicSeoTemplateTopicBlogs = async (api, locale) => {
  var res = await getBlogPublication(api, locale);
  console.log(res);
  if (!res) {
    notFound();
    return {};
  }
  const { data } = res;
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

export {
  makeSeoTemplate,
  makeDynamicSeoTemplate,
  makeDynamicSeoTemplateTopicBlogs,
};
