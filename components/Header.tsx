import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-between items-center bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
        Marvel Veriyan
      </div>
      <div className="flex items-center space-x-4">
        <div
          ref={ref}
          className={`search-bar flex items-center bg-gray-900 rounded-full px-3 py-1 transition-all ${open ? 'w-64' : 'w-10'}`}
          onClick={() => setOpen(true)}
        >
          <FontAwesomeIcon icon="search" className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className={`bg-transparent border-none outline-none text-white ml-2 transition-all duration-300 placeholder-gray-400 ${open ? 'w-48 opacity-100' : 'w-0 opacity-0'}`}
          />
        </div>
        <div className="profile-icon w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 font-bold cursor-pointer border border-gray-700 hover:scale-110 transition-transform">
          <FontAwesomeIcon icon="user" />
        </div>
      </div>
    </header>
  );
};

export default Header;