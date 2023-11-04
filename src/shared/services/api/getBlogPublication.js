import { builder } from "@/shared/helpers/helpers";

const { API_CURENT_BLOG_PAGE, QUERY_CURRENT_BLOG_PAGE, CACHE_OPTIONS } =
  process.env;

export const getBlogPublication = async (name, locale = "ua") => {
  const res = await fetch(
    builder.getOneById(name, API_CURENT_BLOG_PAGE, QUERY_CURRENT_BLOG_PAGE),
    {
      cache: CACHE_OPTIONS,
    }
  );

  const data = await res.json();

  return data;
};
