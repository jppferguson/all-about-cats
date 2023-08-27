import React from 'react';
import Button from './button';

const Header = () => {
  return (
    <header className="flex flex-row justify-between p-4">
      <h1>
        <a href="/">It&apos;s All About Cats</a>
      </h1>
      <Button text="Upload" href="/upload" />
    </header>
  );
};

export default Header;
