/* eslint-disable react/button-has-type */
import clsx from 'clsx';


import {
  ButtonColor,
  ButtonType,
  IconName,
  IconSize
} from '~/libs/enums/enums.js';

import { Icon } from '../icon/icon.jsx';
import styles from './styles.module.scss';

const Button = ({
  onClick,
  className,
  type,
  color,
  iconName,
  iconSize,
  isBasic,
  isFluid,
  isLoading,
  isPrimary,
  isDisabled,
  children
}) => {
  const hasIcon = Boolean(iconName);

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        styles.btn,
        isLoading && styles.loading,
        isFluid && styles.fluid,
        isBasic && styles.basic,
        isPrimary && styles.primary,
        color && styles[`btn__${color}`],
        className
      )}
      type={type}
    >
      {hasIcon && <Icon name={iconName} size={iconSize} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  onClick: null,
  children: null,
  color: null,
  className: null,
  iconSize: null,
  iconName: null,
  isBasic: false,
  isFluid: false,
  isLoading: false,
  isPrimary: false,
  isDisabled: false
};

export { Button };
