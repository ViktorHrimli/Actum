import { builder } from "@/shared/helpers/helpers";

const { API_COMPANY_PAGE, QUERY_COMPANY_PAGE, CACHE_OPTIONS } = process.env;

export const getCompanyPage = async (locale = "ru") => {
  const res = await fetch(
    builder.cloudQuery(API_COMPANY_PAGE, QUERY_COMPANY_PAGE),
    { cache: CACHE_OPTIONS }
  );

  const data = await res.json();

  return data;
};
