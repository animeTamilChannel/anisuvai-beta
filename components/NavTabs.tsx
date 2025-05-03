import React, { useState } from 'react';

const tabs = ['Home', 'TV Shows', 'Movies', 'Originals', 'My List'];

const NavTabs: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <nav className="flex overflow-x-auto pb-2 mb-4 hide-scrollbar">
      <div className="flex space-x-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActive(idx)}
            className={`nav-item px-3 py-2 text-sm font-medium whitespace-nowrap focus:outline-none ${
              active === idx ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavTabs;