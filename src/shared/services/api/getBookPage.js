import { builder } from "@/shared/helpers/helpers";

const { API_BOOK_PAGE, QUERY_BOOK_PAGE, CACHE_OPTIONS } = process.env;

export const getBookPage = async (locale = "ua") => {
  const res = await fetch(builder.cloudQuery(API_BOOK_PAGE, QUERY_BOOK_PAGE), {
    cache: CACHE_OPTIONS,
  });

  const data = await res.json();

  return data;
};
