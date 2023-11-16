import {
  faChevronDown,
  faPhone,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

const borderEnums = {
  home: {
    border: "border_family",
    color_text: "text_family",
    border_check_color: "check_color_border_family",
    check_color: "lable_radio_check",
    options_hover: "options_family",
  },
  family: {
    border: "border_family",
    color_text: "text_family",
    border_check_color: "check_color_border_family",
    check_color: "lable_radio_check",
    options_hover: "options_family",
  },
  army: {
    border: "border_army",
    color_text: "text_army",
    border_check_color: "check_color_border_army",
    check_color: "lable_radio_check_army",
    options_hover: "options_army",
  },
  crime: {
    border: "border_family",
    color_text: "text_criminal",
    border_check_color: "check_color_border_family",
    check_color: "lable_radio_check",
    options_hover: "options_family",
  },
  other: {
    border: "border_other",
    color_text: "text_other",
    border_check_color: "check_color_border_other",
    check_color: "lable_radio_check_other",
    options_hover: "options_other",
  },
};

const iconEnum = {
  Viber: faViber,
  Telegram: faTelegram,
  Telephone: faPhone,
  arrowOpen: faChevronDown,
  warningIcon: faCircleExclamation,
};

export { borderEnums, iconEnum };
