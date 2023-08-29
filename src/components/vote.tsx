'use client';
import React, { FC, useCallback, useState } from 'react';
import Button from './button';

type VoteProps = {
  imageId: string;
};

const Vote: FC<VoteProps> = ({ imageId }) => {
  const [hasVoted, setHasVoted] = useState(false);
  const handleVoteFavourite = useCallback(
    (votePositive: boolean) =>
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!imageId) {
          return;
        }

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
        } catch (error) {
          console.error(error);
          alert(
            typeof error === 'object' && error && 'message' in error
              ? (error.message as string)
              : 'Something went wrong when casting your vote',
          );
        }
      },
    [imageId],
  );

  return (
    <div className="flex flex-col justify-between p-4">
      <div className="flex justify-between">
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
