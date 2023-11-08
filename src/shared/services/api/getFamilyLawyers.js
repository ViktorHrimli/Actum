import { builder } from "@/shared/helpers/helpers";

const { API_FAMILY_SERVICES, QUERY_LAWYERS_PAGE, CACHE_OPTIONS } = process.env;

export const getFamilyLawyers = async (name_page, locale = "ua") => {
  const res = await fetch(
    builder.getLawyersServicesPage(
      name_page,
      API_FAMILY_SERVICES,
      QUERY_LAWYERS_PAGE
    ),
    {
      cache: CACHE_OPTIONS,
    }
  );

  const data = await res.json();

  return data;
};
