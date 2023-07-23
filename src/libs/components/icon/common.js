import {
  faAt,
  faCircleNotch,
  faComment,
  faCopy,
  faFrown,
  faImage,
  faLock,
  faPenToSquare,
  faShareAlt,
  faSignOutAlt,
  faThumbsDown,
  faThumbsUp,
  faTrashCan,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { IconName } from "../../enums/enums";

const iconNameToSvgIcon = {
  [IconName.AT]: faAt,
  [IconName.COMMENT]: faComment,
  [IconName.COPY]: faCopy,
  // thjs-3-delete-post
  [IconName.DELETE]: faTrashCan,
  [IconName.FROWN]: faFrown,
  [IconName.IMAGE]: faImage,
  [IconName.LOCK]: faLock,
  [IconName.LOG_OUT]: faSignOutAlt,
  [IconName.SHARE_ALTERNATE]: faShareAlt,
  [IconName.SPINNER]: faCircleNotch,
  [IconName.THUMBS_UP]: faThumbsUp,
  [IconName.THUMBS_DOWN]: faThumbsDown,
  [IconName.USER]: faUser,
  [IconName.USER_CIRCLE]: faUserCircle,
  // thjs-2-add-update-post
  [IconName.EDIT]: faPenToSquare,
};

export { iconNameToSvgIcon };
