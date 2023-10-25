export const getLayout = async () => {
  // PROD
  const res = await fetch(
    `${process.env.URL_CLOUD_STRAPI}/${process.env.API_LAYOUT}?${process.env.QUERY_LAYOUT}`,
    { cache: "default" }
  );

  // DEV
  // const res = await fetch(
  //   `${process.env.API_LOCALE_BASE_URL}/${process.env.API_LAYOUT}?${process.env.QUERY_LAYOUT}`,
  //   { cache: "no-cache" }
  // );

  const data = await res.json();

  return data;
};
