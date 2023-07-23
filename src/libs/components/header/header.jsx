/* eslint-disable simple-import-sort/imports */
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from '../button/button.jsx';
import { Icon } from '../icon/icon.jsx';
import { Image } from '../image/image.jsx';
import { IconButton } from '../icon-button/icon-button.jsx';

import {
  AppRoute,
  ButtonType,
  IconName,
  IconSize
} from '~/libs/enums/enums.js';

import { useDispatch, useCallback, useState } from '~/libs/hooks/hooks.js';
import { actions as profileAction } from '~/slices/profile/profile.js';

import { userType } from '~/libs/prop-types/property-types.js';

import { DEFAULT_USER_AVATAR } from '~/packages/user/constants/constants.js';

import styles from './styles.module.scss';

const Header = ({ user, onUserLogout }) => {
  const [isEditStatus, setIsEditStatus] = useState(true);
  const [isStatus, setIsStatus] = useState('');

  const dispath = useDispatch();

  const handleClickEditStatus = useCallback(() => {
    dispath(profileAction.updateStatus({ status: isStatus }));
    setIsEditStatus(true);
    setIsStatus('');
  }, [dispath, isStatus]);

  const handleClickEdit = useCallback(
    () => setIsEditStatus(!isEditStatus),
    [isEditStatus]
  );

  const handleChangeStatus = useCallback(
    event => setIsStatus(event.target.value),
    [setIsStatus]
  );

  return (
    <div className={styles.headerWrp}>
      {user && (
        <NavLink to={AppRoute.ROOT}>
          <div className={styles.userWrapper}>
            <Image
              isCircular
              width="45"
              height="45"
              src={user.image?.link ?? DEFAULT_USER_AVATAR}
              alt="user avatar"
            />
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <p> {user.username}</p>
              {isEditStatus ? (
                <p>
                  {user?.status || ''}
                  <IconButton
                    iconName={IconName.EDIT}
                    onClick={handleClickEdit}
                    type={ButtonType.BUTTON}
                  />
                </p>
              ) : (
                <label>
                  <IconButton
                    onClick={handleClickEditStatus}
                    iconName={IconName.EDIT}
                  />
                  <input
                    name="edit"
                    type="text"
                    placeholder="Your status"
                    value={isStatus}
                    onChange={handleChangeStatus}
                  />
                </label>
              )}
            </div>
          </div>
        </NavLink>
      )}
      <div>
        <NavLink to={AppRoute.PROFILE} className={styles.menuBtn}>
          <Icon name={IconName.USER_CIRCLE} size={IconSize.LARGE} />
        </NavLink>
        <Button
          className={`${styles.menuBtn} ${styles.logoutBtn}`}
          onClick={onUserLogout}
          type={ButtonType.BUTTON}
          iconName={IconName.LOG_OUT}
          iconSize={IconSize.LARGE}
          isBasic
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  onUserLogout: PropTypes.func.isRequired,
  user: userType.isRequired
};

export { Header };
