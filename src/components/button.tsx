import React, { FC } from 'react';
import Icon, { IconName } from './icon';

type ButtonProps = {
  href: string;
  text: string;
  icon?: IconName;
};

const Button: FC<ButtonProps> = ({ text, href, icon }) => {
  return (
    <div className="flex flex-row py-2 px-5 border-white border rounded-md items-center">
      {icon && <Icon name={icon} size={16} className="mr-2" />}
      <a href={href}>{text}</a>
    </div>
  );
};

export default Button;
