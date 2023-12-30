import { builder } from "@/shared/helpers/helpers";
import { notFound } from "next/navigation";

const { CACHE_OPTIONS } = process.env;

export const getSeoDynamicPage = async (api, path, locale) => {
  const res = await fetch(builder.getDynamicSeo(api, path, locale), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  if (!data["data"].length) {
    return null;
  }

  return data;
};
