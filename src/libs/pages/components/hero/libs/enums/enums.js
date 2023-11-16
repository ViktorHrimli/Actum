import family from "@/assets/svg/Lawyers_family.png";
import army from "@/assets/svg/Lawyers_army.png";
import crime from "@/assets/svg/Lawyers_crime.png";

import family_watemark from "@/assets/svg/watemark_family.png";
import army_watemark from "@/assets/svg/watemark_army.png";
import crime_watemark from "@/assets/svg/watemark_crime.png";

const lawyersHeroEnums = {
  family: {
    img: family,
    title: family_watemark,
    text: "сімейний адвокат",
    style: "family_gradient",
    color: "family_color",
    backgroundPage: "background_page",
  },
  other: {
    img: family,
    title: family_watemark,
    text: "сімейний адвокат",
    style: "family_gradient",
    color: "other_color",
    backgroundPage: "background_page",
  },
  army: {
    img: army,
    title: army_watemark,
    text: "військовий адвокат",
    style: "army_gradient",
    color: "army_color",
    backgroundPage: "background_page_army",
  },
  crime: {
    img: crime,
    title: crime_watemark,
    text: "кримінальний адвокат",
    style: "crime_gradient",
    color: "crime_color",
    backgroundPage: "background_page",
  },
};

export { lawyersHeroEnums };
