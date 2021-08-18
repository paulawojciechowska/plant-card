import React from 'react';
import leavesIcon from 'assets/icons/leaves.svg';
import rightIcon from 'assets/icons/right.svg';
import leftIcon from 'assets/icons/left.svg';
import logoutIcon from 'assets/icons/logout.svg';
import ButtonIcon from './ButtonIcon';

// This default export determines where your story goes in the story list
export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
};

export const ButtonIcon1 = () => <ButtonIcon icon={leavesIcon} />;
export const ButtonIcon2 = () => <ButtonIcon icon={rightIcon} />;
export const ButtonIcon3 = () => <ButtonIcon icon={leftIcon} />;
export const ButtonIcon4 = () => <ButtonIcon icon={logoutIcon} />;
