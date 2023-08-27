'use client';
import React, { FC, useState } from 'react';
import Icon from './icon';

type FavouriteProps = {
  id: string;
};

const Favourite: FC<FavouriteProps> = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const onClick = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="flex flex-row justify-between p-4">
      <button onClick={onClick}>
        <Icon name={isFavourite ? 'heart' : 'heartOutline'} size={24} />
      </button>
    </div>
  );
};

export default Favourite;
