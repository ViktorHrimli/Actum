export const getHomePage = async () => {
  // PROD
  const res = await fetch(
    `${process.env.URL_CLOUD_STRAPI}/${process.env.API_HOME_PAGE}?${process.env.QUERY_HOME_PAGE}`,
    { cache: "reload" }
  );

  // DEV
  // const res = await fetch(
  //   `${process.env.API_LOCALE_BASE_URL}/${process.env.API_HOME_PAGE}?${process.env.QUERY_HOME_PAGE}`,
  //   { cache: "no-cache" }
  //   // { next: { revalidate: "1600" } }
  // );

  const data = await res.json();

  return data;
};
