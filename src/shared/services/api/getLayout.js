import { builder } from "@/shared/helpers/helpers";

const { API_LAYOUT, QUERY_LAYOUT, CACHE_OPTIONS } = process.env;

export const getLayout = async (locale = "ua") => {
  const res = await fetch(builder.cloudQuery(API_LAYOUT, QUERY_LAYOUT), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};
