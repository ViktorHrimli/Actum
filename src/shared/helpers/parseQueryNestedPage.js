import { slugs } from "@/shared/enums/enum";

var parseQueryNestedPage = (name) => {
  return slugs[Object.keys(slugs).find((el) => name.includes(el))];
};

export { parseQueryNestedPage };
