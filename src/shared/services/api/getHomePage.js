import { builder } from "@/shared/helpers/helpers";

const { API_HOME_PAGE, QUERY_HOME_PAGE, CACHE_OPTIONS } = process.env;

export const getHomePage = async (locale = "ua") => {
  // PROD
  const res = await fetch(builder.cloudQuery(API_HOME_PAGE, QUERY_HOME_PAGE), {
    cache: CACHE_OPTIONS,
  });

  // DEV
  // const res = await fetch(
  //  builder.localQuery(API_HOME_PAGE, QUERY_HOME_PAGE) ,
  //   { cache: CACHE_OPTIONS }
  // );

  const data = await res.json();

  return data;
};
