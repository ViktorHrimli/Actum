import { builder } from "@/shared/helpers/helpers";

const { API_PAYMENT_PAGE, QUERY_PAYMENT_PAGE, CACHE_OPTIONS } = process.env;

export const getPaymentPage = async (locale = "ua") => {
  const res = await fetch(
    builder.cloudQuery(API_PAYMENT_PAGE, QUERY_PAYMENT_PAGE),
    { cache: CACHE_OPTIONS }
  );

  const data = await res.json();

  return data;
};
