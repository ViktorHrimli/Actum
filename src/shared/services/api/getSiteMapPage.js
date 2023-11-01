import { builder } from "@/shared/helpers/helpers";

const { API_SITE_MAP_PAGE, QUERY_SITE_MAP_PAGE, CACHE_OPTIONS } = process.env;

export const getSiteMapPage = async (locale = "ua") => {
  const res = await fetch(
    builder.cloudQuery(API_SITE_MAP_PAGE, QUERY_SITE_MAP_PAGE),
    { cache: CACHE_OPTIONS }
  );

  const data = await res.json();

  return data;
};
