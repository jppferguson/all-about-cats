import React from 'react';
import Button from './button';
import Icon from './icon';

const Header = () => {
  return (
    <header className="flex flex-row justify-between p-6">
      <h1 className="text-lg font-bold">
        <Icon className="inline mr-3" name="paw" size={24} />
        <a href="/">It&apos;s All About Cats</a>
      </h1>
      <Button type="link" text="Upload" href="/upload" icon="upload" />
    </header>
  );
};

export default Header;
