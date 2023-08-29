'use client';
import React, { FC, useCallback, useState } from 'react';
import Button from './button';
import classNames from 'classnames';
import Loading from './loading';

type VoteProps = {
  imageId: string;
  setScoreOffset: React.Dispatch<React.SetStateAction<number>>;
};

const Vote: FC<VoteProps> = ({ imageId, setScoreOffset }) => {
  const [isPlacingVote, setIsPlacingVote] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const handleVoteFavourite = useCallback(
    (votePositive: boolean) =>
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!imageId) {
          return;
        }
        setIsPlacingVote(true);

        try {
          const response = await fetch('/api/vote', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              imageId,
              votePositive,
            }),
          });

          const { success, error } = await response.json();

          if (error || !success) {
            throw new Error(error || 'Something went wrong');
          }
          setHasVoted(true);
          setScoreOffset(votePositive ? 1 : -1);
        } catch (error) {
          console.error(error);
          alert(
            typeof error === 'object' && error && 'message' in error
              ? (error.message as string)
              : 'Something went wrong when casting your vote',
          );
        } finally {
          setIsPlacingVote(false);
        }
      },
    [imageId, setScoreOffset],
  );

  return (
    <div className="flex flex-col justify-between p-4 relative">
      {isPlacingVote && (
        <Loading
          text="Placing Vote..."
          className="absolute right-0 left-0 top-0 bottom-0 z-10"
        />
      )}
      <div
        className={classNames('flex justify-between', {
          'opacity-25 pointer-events-none': isPlacingVote,
        })}
      >
        <div className="flex">
          <Button
            type="button"
            icon="thumbsUp"
            size="sm"
            disabled={hasVoted}
            text="Vote Up"
            onClick={handleVoteFavourite(true)}
          />
        </div>
        <div className="ml-4 flex">
          <Button
            type="button"
            size="sm"
            icon="thumbsDown"
            disabled={hasVoted}
            text="Vote Down"
            onClick={handleVoteFavourite(false)}
          />
        </div>
      </div>
      {hasVoted && (
        <p className="text-center text-sm mt-3">Thanks for voting!</p>
      )}
    </div>
  );
};

export default Vote;
