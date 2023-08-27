'use client';
import React, { FC } from 'react';
import Icon from './icon';

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
      <div className="flex">
        <button onClick={onClickUp}>
          <Icon name="thumbsUp" size={14} className="mr-2" />
        </button>
        <div className="text-sm">5</div>
      </div>
      <div className="ml-4 flex">
        <button onClick={onClickDown}>
          <Icon name="thumbsDown" size={14} className="mr-2" />
        </button>
        <div className="text-sm">5</div>
      </div>
    </div>
  );
};

export default Vote;
