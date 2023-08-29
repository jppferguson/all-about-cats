import React, { FC } from 'react';
import Vote from './vote';
import Favourite from './favourite';
import Image from 'next/image';
type CatImageProps = {
  id: string;
  imageUrl: string;
};

const CatImage: FC<CatImageProps> = ({ id, imageUrl }) => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="max-w-2xl relative flex justify-center">
        <Image
          alt="cat"
          src={imageUrl}
          width={300}
          height={300}
          className="object-cover"
        />
        <Favourite id={id} className="absolute right-5 top-5" />
      </div>
      <Vote id={id} />
    </div>
  );
};

export default CatImage;