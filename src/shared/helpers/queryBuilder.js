const {
  URL_CLOUD_STRAPI,
  API_LOCALE_BASE_URL,
  QUERY_SEO_OPTIONS,
  QUERY_LAWYERS_PAGE,
} = process.env;

class QueryBuilder {
  #baseUrl = "api/";
  #local = API_LOCALE_BASE_URL;
  #cloud = URL_CLOUD_STRAPI;

  localQuery(path, options) {
    return `${API_LOCALE_BASE_URL}/${path}?${options}`;
  }
  cloudQuery(path, options, locale) {
    return `${URL_CLOUD_STRAPI}/${path}?locale=${locale}&${options}`;
  }

  getOneById(name, path, options) {
    return `${URL_CLOUD_STRAPI}/${path}?filters[Topic][name_page][$eq]=${name}&${options}`;
  }

  getLawyersStaticPage(api_page) {
    return `${URL_CLOUD_STRAPI}/${api_page}?${QUERY_LAWYERS_PAGE}`;
  }

  getLawyersServicesPage(name, path, options) {
    return `${URL_CLOUD_STRAPI}/${path}?filters[name_page][$eq]=${name}&${options}`;
  }

  getSeo(path, locale) {
    return `${URL_CLOUD_STRAPI}/${path}?locale=${locale}&${QUERY_SEO_OPTIONS}`;
  }

  getDynamicSeo(api, path) {
    return `${URL_CLOUD_STRAPI}/${path}?filters[name_page][$eq]=${api}&${QUERY_SEO_OPTIONS}`;
  }
}

const builder = new QueryBuilder();

export { builder };
