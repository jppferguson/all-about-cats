'use client';
import React, { FC, useState } from 'react';
import Vote from './vote';
import Favourite from './favourite';
import Image from 'next/image';
import CatScore from './catScore';
type CatImageProps = {
  id: string;
  imageUrl: string;
  favouriteId?: number;
  score: number;
};

const CatImage: FC<CatImageProps> = ({ id, imageUrl, favouriteId, score }) => {
  const [scoreOffset, setScoreOffset] = useState(0);
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="max-w-2xl relative flex justify-center">
        <Image
          alt="cat"
          src={imageUrl}
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
        <Favourite
          imageId={id}
          className="absolute right-5 top-5"
          favouriteId={favouriteId}
        />
        <CatScore
          className="absolute bottom-2 left-2"
          score={score + scoreOffset}
        />
      </div>
      <Vote imageId={id} setScoreOffset={setScoreOffset} />
    </div>
  );
};

export default CatImage;
