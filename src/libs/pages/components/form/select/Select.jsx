import Select from "react-select";

import data from "@/assets/json/countries.json";
import { socialMediaEnums } from "./libs/enums/enums";

export default function Countries({ ...props }) {
  return (
    //   <Controller
    //   name="message"
    //   control={control}
    //   rules={{ required: true }}
    //   render={({ field }) => (
    //     <Select
    //       {...field}
    //       options={socialMediaEnums}
    //       defaultInputValue={"Messangers"}
    //       defaultMenuIsOpen="adawd"
    //       placeholder="Message"
    //       styles={colourStyles}
    //     />
    //   )}
    // />
    <Select
      defaultInputValue="Оберіть спосіб отримання відповіді"
      options={socialMediaEnums}
    />
  );
}
