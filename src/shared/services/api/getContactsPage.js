import { builder } from "@/shared/helpers/helpers";

const { API_CONTACT_PAGE, QUERY_CONTACT_PAGE, CACHE_OPTIONS } = process.env;

export const getContactsPage = async (locale = "ua") => {
  const res = await fetch(
    builder.cloudQuery(API_CONTACT_PAGE, QUERY_CONTACT_PAGE),
    { cache: CACHE_OPTIONS }
  );

  const data = await res.json();

  return data;
};
