import React, { FC } from 'react';

type ButtonProps = {
  href: string;
  text: string;
};

const Button: FC<ButtonProps> = ({ text, href }) => {
  return (
    <div className="py-2 px-5 border-white border rounded-md">
      <a href={href}>{text}</a>
    </div>
  );
};

export default Button;
