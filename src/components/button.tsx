import React, { FC } from 'react';
import Icon, { IconName } from './icon';
import classNames from 'classnames';

type ButtonChildrenProps = {
  text: string;
  icon?: IconName;
};

type ButtonBaseProps = ButtonChildrenProps & {
  disabled?: boolean;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps & {
  type: 'link';
  href: string;
};

type ButtonProps = ButtonBaseProps & {
  type: 'button';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type AllButtonProps = ButtonLinkProps | ButtonProps;

const ButtonChildren: FC<ButtonChildrenProps> = ({ icon, text }) => (
  <>
    {icon && (
      <Icon name={icon} size={16} className={classNames({ 'mr-2': text })} />
    )}
    {text}
  </>
);

const Button: FC<AllButtonProps> = ({
  className,
  disabled,
  icon,
  text,
  ...props
}) => {
  if (props.type === 'link') {
    props.href;
  }
  const allClassNames = classNames(
    'flex flex-row py-2 px-5 border-current border rounded-md items-center disabled:opacity-40',
    className,
  );

  if (props.type === 'link') {
    return (
      <a href={props.href} className={allClassNames}>
        <ButtonChildren icon={icon} text={text} />
      </a>
    );
  }
  return (
    <button
      className={allClassNames}
      disabled={disabled}
      onClick={props.onClick}
    >
      <ButtonChildren icon={icon} text={text} />
    </button>
  );
};

export default Button;
