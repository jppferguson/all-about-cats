'use client';
import React, { FC } from 'react';

type FavouriteProps = {
  id: string;
};

const Favourite: FC<FavouriteProps> = () => {
  const onClick = () => {
    console.log('favourite');
  };
  return (
    <div className="flex flex-row justify-between p-4">
      <button onClick={onClick}>Favourite TBC</button>
    </div>
  );
};

export default Favourite;
