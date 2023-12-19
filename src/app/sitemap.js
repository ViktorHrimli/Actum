import { getStaticPage } from "@/shared/services/api/api";
const { API_ROBOTS, QUERY_ROBOTS } = process.env;

export default async function sitemap() {
  const {
    data: {
      attributes: { BASE_URL, obj },
    },
  } = await getStaticPage(API_ROBOTS, QUERY_ROBOTS);

  return obj.map((item) => {
    console.log(item);
    return {
      url: BASE_URL + item.url,
      lastModified: new Date().toISOString(),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    };
  });
}
