export const getCompanyPage = async () => {
  // PROD
  const res = await fetch(
    `${process.env.URL_CLOUD_STRAPI}/${process.env.API_COMPANY_PAGE}?${process.env.QUERY_COMPANY_PAGE}`,
    { cache: "no-cache" }
  );

  // DEV
  // const res = await fetch(
  //   `${process.env.API_LOCALE_BASE_URL}/${process.env.API_COMPANY_PAGE}?${process.env.QUERY_COMPANY_PAGE}`,
  //   { cache: "no-cache" }
  // );

  const data = await res.json();

  return data;
};
