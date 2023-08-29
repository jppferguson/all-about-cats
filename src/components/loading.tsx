import React, { FC } from 'react';
import classNames from 'classnames';
import Icon from './icon';

type LoadingProps = {
  text: string;
  className?: string;
};

const Loading: FC<LoadingProps> = ({ text, className }) => (
  <div className={classNames('flex justify-center items-center', className)}>
    <div className="bg-slate-800 px-4 py-2 rounded text-center">
      <Icon
        name="spinner"
        size={14}
        className="inline-block animate-spin mx-2"
      />
      <span className="text-sm">{text}</span>
    </div>
  </div>
);

export default Loading;
