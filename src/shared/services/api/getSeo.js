import { builder } from "@/shared/helpers/helpers";

const { CACHE_OPTIONS } = process.env;

export const getSeo = async (path, locale) => {
  const res = await fetch(builder.getSeo(path, locale), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};
