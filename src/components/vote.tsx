'use client';
import React, { FC } from 'react';
import Icon from './icon';
import Button from './button';

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
        <Button type="button" icon="thumbsUp" text="" onClick={onClickUp} />
        <div className="text-sm p-3">5</div>
      </div>
      <div className="ml-4 flex">
        <Button type="button" icon="thumbsDown" text="" onClick={onClickDown} />
        <div className="text-sm p-3">5</div>
      </div>
    </div>
  );
};

export default Vote;
