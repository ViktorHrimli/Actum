export const getNavigationPage = async (local = "ua") => {
  const res = await fetch(
    `http://127.0.0.1:1337/api/pages-navs/?populate=laywers`,
    {
      cache: "reload",
    }
  );

  const data = await res.json();

  return data;
};
