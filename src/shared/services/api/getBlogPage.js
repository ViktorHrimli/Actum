import { builder } from "@/shared/helpers/helpers";

const { API_BLOG_PAGE, QUERY_BLOG_PAGE, CACHE_OPTIONS } = process.env;

export const getBlogPage = async (locale = "ua") => {
  // PROD
  const res = await fetch(builder.cloudQuery(API_BLOG_PAGE, QUERY_BLOG_PAGE), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};
