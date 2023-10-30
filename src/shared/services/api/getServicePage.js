import { builder } from "@/shared/helpers/helpers";

const { API_SERVICE_PAGE, QUERY_SERVICE_PAGE, CACHE_OPTIONS } = process.env;

export const getServicePage = async (locale = "ua") => {
  const res = await fetch(
    builder.cloudQuery(API_SERVICE_PAGE, QUERY_SERVICE_PAGE),
    { cache: CACHE_OPTIONS }
  );

  const data = await res.json();

  return data;
};
