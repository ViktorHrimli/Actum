import { getStaticPage } from "@/shared/services/api/api";

const { API_ROBOTS, QUERY_ROBOTS } = process.env;

export default async function sitemap() {
  try {
    const { data } = await getStaticPage(API_ROBOTS, QUERY_ROBOTS);

    if (!data) {
      console.error("Invalid or non-iterable data:", data);
      return [];
    }

    const {
      attributes: { BASE_URL, obj },
    } = data;

    return obj.map((item) => ({
      url: BASE_URL + item.url,
      lastModified: item.dateChange,
      changeFrequency: item.changeFrequency.toLowerCase(),
      priority: item.priority,
    }));
  } catch (error) {
    console.error("Error during sitemap generation:", error);
    return [];
  }
}
