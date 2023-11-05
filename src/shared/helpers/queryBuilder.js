const { URL_CLOUD_STRAPI, API_LOCALE_BASE_URL, QUERY_SEO_OPTIONS } =
  process.env;

class QueryBuilder {
  #baseUrl = "api/";
  #local = API_LOCALE_BASE_URL;
  #cloud = URL_CLOUD_STRAPI;

  localQuery(path, options) {
    return `${API_LOCALE_BASE_URL}/${path}?${options}`;
  }
  cloudQuery(path, options) {
    return `${URL_CLOUD_STRAPI}/${path}?${options}`;
  }

  getOneById(name, path, options) {
    return `${URL_CLOUD_STRAPI}/${path}?filters[Topic][name_page][$eq]=${name}&${options}`;
  }

  getSeo(path) {
    console.log(path);
    return `${URL_CLOUD_STRAPI}/${path}?${QUERY_SEO_OPTIONS}`;
  }
}

const builder = new QueryBuilder();

export { builder };
