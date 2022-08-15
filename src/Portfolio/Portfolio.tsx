import React from 'react';

import Manager from './Manager';
import Search from './Search';
import HoldingsList from './HoldingsList';
import Chart from './Chart';
import CategorySelection from './CategorySelection';
import './styles.css';

const Portfolio: React.FC = () => {
  return (
    <Manager>
      <div className="background-image grid grid-cols-2">
        <div className="mb-16 mt-8 flex flex-col px-2" data-testid="holdings-section">
          <h1 className="text-3xl font-extrabold text-slate-700">Protfolio by Sector</h1>
          <div className="sticky top-0 mb-2 rounded-b-md pt-2">
            <Search />
          </div>
          <HoldingsList />
        </div>
        <div className="h-full min-h-screen" data-testid="graph-section">
          <div className="sticky top-0 p-2">
            <div className="absolute right-2 top-2 mt-4 mr-4 flex gap-2">
              <CategorySelection />
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </Manager>
  );
};

export default Portfolio;
