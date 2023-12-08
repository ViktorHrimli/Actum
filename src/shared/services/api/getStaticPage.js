import { builder } from "@/shared/helpers/helpers";

const { CACHE_OPTIONS } = process.env;

export const getStaticPage = async (api_name, query_api, locale = "uk") => {
  const res = await fetch(builder.cloudQuery(api_name, query_api, locale), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};
