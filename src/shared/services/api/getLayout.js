export const getLayout = async () => {
  // PROD
  const res = await fetch(
    `${process.env.URL_CLOUD_STRAPI}/${process.env.API_LAYOUT}?${process.env.QUERY_LAYOUT}`,
    { cache: "no-cache" }
  );

  // DEV
  // const res = await fetch(
  //   `${process.env.API_LOCALE_BASE_URL}/${process.env.API_LAYOUT}?${process.env.QUERY_LAYOUT}`,
  //   { next: { revalidate: "1600" } }
  // );

  const data = await res.json();

  return data;
};
