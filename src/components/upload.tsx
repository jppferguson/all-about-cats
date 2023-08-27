import React, { FC } from 'react';

type UploadProps = {
  tbc: string;
};

const Upload: FC<UploadProps> = ({}) => {
  return (
    <div className="flex flex-row justify-between p-4">
      <p>Upload TBC</p>
    </div>
  );
};

export default Upload;
