import { builder } from "@/shared/helpers/helpers";

const { API_FAMILY_PAGE, QUERY_LAWYERS_PAGE, CACHE_OPTIONS } = process.env;

export const getFamilyPage = async (locale = "ua") => {
  const res = await fetch(
    builder.cloudQuery(API_FAMILY_PAGE, QUERY_LAWYERS_PAGE),
    {
      cache: CACHE_OPTIONS,
    }
  );

  const data = await res.json();

  return data;
};
