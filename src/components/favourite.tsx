'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Icon from './icon';
import classNames from 'classnames';
import Loading from './loading';

type FavouriteProps = {
  className: string;
  imageId: string;
  favouriteId?: number;
};

const Favourite: FC<FavouriteProps> = ({ className, imageId, favouriteId }) => {
  const [isSavingFavourite, setIsSavingFavourite] = useState(false);
  const [favouriteIdLocal, setFavouriteIdLocal] = useState<number>();
  const isFavourite = !!favouriteIdLocal;

  useEffect(() => {
    setFavouriteIdLocal(favouriteId);
  }, [favouriteId]);

  const handleSaveFavourite = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!imageId) {
        return;
      }
      setIsSavingFavourite(true);

      try {
        const response = await fetch('/api/favourite', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imageId,
            favouriteId,
            setFavourite: !isFavourite,
          }),
        });

        const {
          success,
          error,
          favouriteId: favouriteIdFromResponse,
        } = await response.json();

        if (error || !success) {
          throw new Error(error || 'Something went wrong');
        }
        setFavouriteIdLocal(favouriteIdFromResponse);
      } catch (error) {
        console.error(error);
        alert(
          typeof error === 'object' && error && 'message' in error
            ? (error.message as string)
            : 'Something went wrong saving your favourite',
        );
      } finally {
        setIsSavingFavourite(false);
      }
    },
    [imageId, isFavourite, favouriteId],
  );

  return (
    <div className={classNames('flex flex-row justify-between p-4', className)}>
      {isSavingFavourite && (
        <Loading
          text="Saving..."
          className="absolute right-12 z-10 flex justify-center items-center"
        />
      )}
      <button onClick={handleSaveFavourite}>
        <Icon name={isFavourite ? 'heart' : 'heartOutline'} size={24} />
      </button>
    </div>
  );
};

export default Favourite;
