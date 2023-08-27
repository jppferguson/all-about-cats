import React, { FC } from 'react';
import Vote from './vote';
import Favourite from './favourite';

type CatImageProps = {
  id: string;
};

const CatImage: FC<CatImageProps> = ({ id }) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <p>{id}</p>
      <Favourite id={id} />
      <Vote id={id} />
    </div>
  );
};

export default CatImage;
