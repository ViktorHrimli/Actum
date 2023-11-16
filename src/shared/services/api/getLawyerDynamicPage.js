import { builder } from "@/shared/helpers/helpers";

const { API_FAMILY_SERVICES, QUERY_LAWYERS_PAGE, CACHE_OPTIONS } = process.env;

export const getLawyerDynamicPage = async (
  name_page,
  api_service_page,
  locale = "ua"
) => {
  const res = await fetch(
    builder.getLawyersServicesPage(
      name_page,
      api_service_page,
      QUERY_LAWYERS_PAGE
    ),
    {
      cache: CACHE_OPTIONS,
    }
  );

  const data = await res.json();

  return data;
};
