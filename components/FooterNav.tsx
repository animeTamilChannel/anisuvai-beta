import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navs = [
  { icon: 'home', label: 'Home' },
  { icon: 'search', label: 'Search' },
  { icon: 'compass', label: 'Discover' },
  { icon: 'download', label: 'Downloads' },
];

const FooterNav: React.FC = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg flex justify-around py-3 px-4 z-50 border-t border-gray-800">
    {navs.map(({ icon, label }) => (
      <button key={label} className="flex flex-col items-center text-gray-400 text-xs hover:text-white transition">
        <FontAwesomeIcon icon={icon as any} className="text-lg mb-1" />
        <span>{label}</span>
      </button>
    ))}
  </nav>
);

export default FooterNav;