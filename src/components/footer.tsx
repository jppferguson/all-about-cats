import React from 'react';
import Icon from './icon';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-sm text-slate-400 pb-6">
      <p className="font-bold mb-2">It&apos;s All About Cats</p>
      <p>
        Made with <Icon className="inline" name="paw" size={14} /> in Edinburgh,
        UK — 2023
      </p>
    </footer>
  );
};

export default Footer;
