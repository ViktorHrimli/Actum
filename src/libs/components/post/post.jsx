/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';

import { IconName } from '~/libs/enums/enums.js';
import { getFromNowTime } from '~/libs/helpers/helpers.js';
import { useCallback, useSelector } from '~/libs/hooks/hooks.js';
import { postType } from '~/libs/prop-types/property-types.js';

import { IconButton } from '../icon-button/icon-button.jsx';
import { Image } from '../image/image.jsx';
import styles from './styles.module.scss';

const Post = ({
  post,
  onPostReact,
  onExpandedPostToggle,
  onSharePost,
  onEditPost,
  onDeletePost
}) => {
  const {
    id,
    image,
    body,
    user,
    likeCount,
    dislikeCount,
    commentCount,
    createdAt,
    updatedAt,
    userId
  } = post;
  const date = getFromNowTime(createdAt);
  const dateUpdate = getFromNowTime(updatedAt);

  const isUpdatePostDate = dateUpdate > date;

  const isUserPost = useSelector(state => state.profile.user.id === userId);

  const handlePostReact = useCallback(
    (id, isLike) => onPostReact({ id, isLike }),
    [id, onPostReact]
  );

  const handleExpandedPostToggle = useCallback(
    () => onExpandedPostToggle(id),
    [id, onExpandedPostToggle]
  );
  const handleSharePost = useCallback(() => onSharePost(id), [id, onSharePost]);

  const handleDeletePost = useCallback(
    () => onDeletePost(id),
    [id, onDeletePost]
  );

  // task/thjs-2-add-update-post
  const handleClickEditPost = useCallback(
    () => onEditPost(id),
    [id, onEditPost]
  );
  return (
    <div className={styles.card}>
      {image && <Image src={image.link} alt="post image" />}

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{`${isUpdatePostDate ? 'updated' : 'posted'} by ${
            user.username
          } - ${isUpdatePostDate ? dateUpdate : date}`}</span>

          {isUserPost && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                iconName={IconName.EDIT}
                onClick={handleClickEditPost}
                label="Edit"
              />

              <IconButton
                iconName={IconName.DELETE}
                onClick={handleDeletePost}
                label="Remove"
              />
            </div>
          )}
        </div>
        <p className={styles.description}>{body}</p>
      </div>
      <div className={styles.extra}>
        <IconButton
          iconName={IconName.THUMBS_UP}
          label={likeCount}
          onClick={() => handlePostReact(id, true)}
        />
        <IconButton
          iconName={IconName.THUMBS_DOWN}
          label={dislikeCount}
          onClick={() => handlePostReact(id, false)}
        />
        <IconButton
          iconName={IconName.COMMENT}
          label={commentCount}
          onClick={handleExpandedPostToggle}
        />
        <IconButton
          iconName={IconName.SHARE_ALTERNATE}
          onClick={handleSharePost}
        />
      </div>
    </div>
  );
};

Post.propTypes = {
  post: postType.isRequired,
  onEditPost: PropTypes.func.isRequired,
  onPostReact: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  onExpandedPostToggle: PropTypes.func.isRequired,
  onSharePost: PropTypes.func.isRequired
};

export { Post };
