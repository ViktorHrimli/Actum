import { builder } from "@/shared/helpers/helpers";

const { API_COMPANY_PAGE, QUERY_COMPANY_PAGE, CACHE_OPTIONS } = process.env;

export const getCompanyPage = async (locale = "ru") => {
  // PROD
  const res = await fetch(
    `${process.env.URL_CLOUD_STRAPI}/${process.env.API_COMPANY_PAGE}?${process.env.QUERY_COMPANY_PAGE}`,
    { cache: CACHE_OPTIONS }
  );

  const data = await res.json();

  return data;
};
