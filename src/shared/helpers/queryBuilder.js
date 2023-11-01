const { URL_CLOUD_STRAPI, API_LOCALE_BASE_URL } = process.env;

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
}

const builder = new QueryBuilder();

export { builder };
