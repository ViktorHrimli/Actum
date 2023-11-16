import FamilyMap from "src/assets/svg/Map_family.svg";
import ArmyMap from "src/assets/svg/Map_army.svg";
import CriminalMap from "src/assets/svg/Map_criminal.svg";
import OtherMap from "src/assets/svg/Map_other.svg";

const specialistsEnumsMap = {
  family: {
    colorMap: FamilyMap,
  },
  other: {
    colorMap: OtherMap,
  },
  army: {
    colorMap: ArmyMap,
  },
  crime: {
    colorMap: CriminalMap,
  },
};

export { specialistsEnumsMap };
