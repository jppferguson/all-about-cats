'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

type CatScoreProps = {
  className: string;
  score: number;
};

const CatScore: FC<CatScoreProps> = ({ className, score }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center p-4 text-shadow-lg',
        className,
      )}
    >
      <h3 className="text-sm uppercase">Cat Score</h3>
      <p className="text-4xl font-bold">{score}</p>
    </div>
  );
};

export default CatScore;
