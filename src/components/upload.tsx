'use client';
import React, { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './button';
import Image from 'next/image';
import Icon from './icon';
import classNames from 'classnames';
import Loading from './loading';

export const Upload: FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string>();
  const [imageFile, setImageFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>();

  const router = useRouter();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => e.preventDefault(),
    [],
  );

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
      }
    },
    [],
  );

  const handleUploadImageFile = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!imageFile) {
        return;
      }
      setIsUploading(true);

      try {
        const formData = new FormData();
        formData.append('file', imageFile);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const { success, error } = await response.json();

        if (error || !success) {
          throw new Error(error || 'Something went wrong');
        }

        router.replace('/');
      } catch (error) {
        console.error(error);
        setError(
          typeof error === 'object' && error && 'message' in error
            ? (error.message as string)
            : 'Something went wrong',
        );
      } finally {
        setIsUploading(false);
      }
    },
    [imageFile, router],
  );

  const handleCancelUpload = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!previewUrl && !imageFile) {
        return;
      }
      setImageFile(undefined);
      setPreviewUrl(undefined);
    },
    [imageFile, previewUrl],
  );

  return (
    <>
      {error && (
        <p className="border-red-500 border border-l-4 text-red-500 text-md mb-4  p-2">
          {error}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full p-3 border border-gray-500 border-dashed relative"
      >
        {isUploading && (
          <Loading
            text="Uploading..."
            className="absolute right-0 left-0 top-0 bottom-0 z-10"
          />
        )}
        <div
          className={classNames('flex flex-col relative', {
            'opacity-25 pointer-events-none': isUploading,
          })}
        >
          {previewUrl ? (
            <div className="mx-auto w-80">
              <Image
                alt="file uploader preview"
                objectFit="cover"
                src={previewUrl}
                width={300}
                height={300}
                layout="fixed"
              />
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
              <Icon name="upload" size={48} className="mb-2" />
              <strong className="text-sm font-medium">
                Select an image to upload
              </strong>
              <input
                className="block w-0 h-0"
                type="file"
                name="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
          {!!imageFile && (
            <div className="flex flex-col mb-4 justify-center items-center absolute left-0 right-0 top-0 bottom-0">
              <Button
                type="button"
                className="mb-2 bg-slate-700"
                onClick={handleUploadImageFile}
                text="Upload file"
              />
              <Button
                type="button"
                className="mb-2 bg-slate-700"
                onClick={handleCancelUpload}
                text="Cancel"
              />
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Upload;
