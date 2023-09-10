import NestedHero from "@/libs/pages/components/nestedPageHero/NestedHero";
import Path from "@/libs/pages/components/path/Path";

import hero_public from "@/assets/svg/publications_hero.png";

export default function page() {
  return (
    <>
      <NestedHero img={hero_public} text={"публікації"} />
      <Path
        path="ЧОМУ ВІЙСЬКОВИМ НЕ ВИПЛАЧУЮТЬ КОМПЕНСАЦІЮ ЗА ПОРАНЕННЯ?"
        type={"family_color"}
        back="/blog-3-1"
      />
    </>
  );
}
