import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/libs/enums/enum";

import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

export default function Family() {
  return (
    <>
      <HeroLawyers type={"family"} />
    </>
  );
}
