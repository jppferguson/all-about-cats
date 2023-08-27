import React, { FC } from 'react';

type IconProps = {
  name: string;
};

const Icon: FC<IconProps> = ({ name }) => {
  return (
    <div className="flex flex-row justify-between p-4">
      <p>Icon {name} TBC</p>
    </div>
  );
};

export default Icon;
