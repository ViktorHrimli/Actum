import { builder } from "@/shared/helpers/helpers";

const { CACHE_OPTIONS } = process.env;

export const getSeoDynamicPage = async (api, path) => {
  const res = await fetch(builder.getDynamicSeo(api, path), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};