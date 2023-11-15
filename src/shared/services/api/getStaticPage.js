import { builder } from "@/shared/helpers/helpers";

const { CACHE_OPTIONS } = process.env;

export const getStaticPage = async (api_name, query_api) => {
  const res = await fetch(builder.cloudQuery(api_name, query_api), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};
