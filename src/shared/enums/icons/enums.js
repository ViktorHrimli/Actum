import {
  faChevronDown,
  faPhone,
  faCircleExclamation,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import {
  faViber,
  faTelegram,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const horizontalSwipeArrow = (fill) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    role="button"
  >
    <path d="M17.95 19L12.95 12L17.95 5H15.5L10.5 12L15.5 19H17.95ZM12 19L6.99995 12L12 5H9.54995L4.54995 12L9.54995 19H12Z" />
  </svg>
);

const iconEnum = {
  Viber: faViber,
  Telegram: faTelegram,
  Telephone: faPhone,
  arrowOpen: faChevronDown,
  warningIcon: faCircleExclamation,
  Facebook: faFacebook,
  Instagram: faInstagram,
  search: faMagnifyingGlass,
  horizontalArrow: horizontalSwipeArrow,
};

export { iconEnum };
