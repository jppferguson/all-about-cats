import React, { FC } from 'react';
import { IconType } from 'react-icons';

import {
  FaHeart,
  FaRegHeart,
  FaUpload,
  FaThumbsUp,
  FaThumbsDown,
  FaSpinner,
} from 'react-icons/fa';
import { IoPawSharp, IoArrowBack } from 'react-icons/io5';

export type IconName = keyof typeof IconMap;

type IconProps = {
  className?: string;
  name: IconName;
  size?: number;
};

const IconMap = {
  arrowBack: IoArrowBack,
  heart: FaHeart,
  heartOutline: FaRegHeart,
  upload: FaUpload,
  paw: IoPawSharp,
  spinner: FaSpinner,
  thumbsDown: FaThumbsDown,
  thumbsUp: FaThumbsUp,
};

const Icon: FC<IconProps> = ({ className, name, size = 24 }) => {
  if (IconMap[name]) {
    const IconComponent: IconType = IconMap[name];
    return <IconComponent className={className} size={size} />;
  }
  return null;
};

export default Icon;
