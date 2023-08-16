import Select from "react-select";

import data from "@/assets/json/countries.json";
import { socialMediaEnums } from "./libs/enums/enums";

export default function Countries({ ...props }) {
  return (
    <Select
      defaultInputValue="Оберіть спосіб отримання відповіді"
      options={socialMediaEnums}
    />
  );
}
