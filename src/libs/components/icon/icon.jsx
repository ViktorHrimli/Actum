import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconColor, IconName, IconSize } from "../../enums/enums";

import { iconNameToSvgIcon } from "./common.js";

const Icon = ({ className, name, size, color, isLoading }) => (
  <FontAwesomeIcon
    className={className}
    icon={iconNameToSvgIcon[name]}
    size={size}
    color={color}
    spin={isLoading}
  />
);

Icon.defaultProps = {
  className: undefined,
  size: IconSize.LARGE,
  color: null,
  isLoading: false,
};

export { Icon };
