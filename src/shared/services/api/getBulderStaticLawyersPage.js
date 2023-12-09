import { builder } from "@/shared/helpers/helpers";

const { CACHE_OPTIONS } = process.env;

export const getStaticLawyersPage = async (api_name, locale = "uk") => {
  const res = await fetch(builder.getLawyersStaticPage(api_name, locale), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};
