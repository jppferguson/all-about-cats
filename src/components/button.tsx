import React, { FC } from 'react';
import Icon, { IconName } from './icon';
import classNames from 'classnames';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonChildrenProps = {
  size?: ButtonSize;
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

const iconSizeMap: Record<ButtonSize, number> = {
  sm: 12,
  md: 16,
  lg: 24,
};
const paddingClassSizeMap: Record<ButtonSize, string> = {
  sm: 'py-1 px-3',
  md: 'py-2 px-5',
  lg: 'py-3 px-6',
};

const ButtonChildren: FC<ButtonChildrenProps> = ({ icon, text, size }) => (
  <>
    {icon && (
      <Icon
        name={icon}
        size={iconSizeMap[size ?? 'md']}
        className={classNames({ 'mr-2': text })}
      />
    )}
    <span className={`text-${size ?? 'md'}`}>{text}</span>
  </>
);

const Button: FC<AllButtonProps> = ({
  className,
  disabled,
  icon,
  size = 'md',
  text,
  ...props
}) => {
  if (props.type === 'link') {
    props.href;
  }
  const allClassNames = classNames(
    `flex flex-row ${paddingClassSizeMap[size]} border-current border rounded-md items-center disabled:opacity-40`,
    className,
  );

  if (props.type === 'link') {
    return (
      <a href={props.href} className={allClassNames}>
        <ButtonChildren icon={icon} text={text} size={size} />
      </a>
    );
  }
  return (
    <button
      className={allClassNames}
      disabled={disabled}
      onClick={props.onClick}
    >
      <ButtonChildren icon={icon} text={text} size={size} />
    </button>
  );
};

export default Button;
