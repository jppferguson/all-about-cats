'use client';
import React, { FC } from 'react';

type VoteProps = {
  id: string;
};

const Vote: FC<VoteProps> = () => {
  const onClickUp = () => {
    console.log('vote up');
  };
  const onClickDown = () => {
    console.log('vote down');
  };

  return (
    <div className="flex flex-row justify-between p-4">
      <button onClick={onClickUp}>Vote Up</button>
      <div>5</div>
      <button onClick={onClickDown}>Vote Down</button>
      <div>5</div>
    </div>
  );
};

export default Vote;
