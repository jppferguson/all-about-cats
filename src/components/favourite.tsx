'use client';
import React, { FC, useState } from 'react';
import Icon from './icon';
import classNames from 'classnames';

type FavouriteProps = {
  className: string;
  id: string;
};

const Favourite: FC<FavouriteProps> = ({ className }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const onClick = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <div className={classNames('flex flex-row justify-between p-4', className)}>
      <button onClick={onClick}>
        <Icon name={isFavourite ? 'heart' : 'heartOutline'} size={24} />
      </button>
    </div>
  );
};

export default Favourite;
