export const getPaymentPage = async () => {
  // PROD
  // const res = await fetch(
  //   `${process.env.URL_CLOUD_STRAPI}/${process.env.API_PAYMENT_PAGE}?${process.env.QUERY_PAYMENT_PAGE}`,
  //   { cache: "reload" }
  // );

  // DEV
  const res = await fetch(
    `${process.env.API_LOCALE_BASE_URL}/${process.env.API_PAYMENT_PAGE}?${process.env.QUERY_PAYMENT_PAGE}`,
    { cache: "no-cache" }
  );

  const data = await res.json();

  return data;
};
