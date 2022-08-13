import React from 'react';

import Manager from './Manager';
import Search from './Search';
import HoldingsList from './HoldingsList';
import Chart from './Chart';
import { Screen } from '../components';

const Portfolio: React.FC = () => {
  return (
    <Manager>
      <div className="grid grid-cols-2">
        <div className="flex flex-col px-2 mb-16 mt-8">
          <h1 className="text-2xl font-extrabold">Protfolio by Sector</h1>
          <div className="sticky top-0 mb-2 pt-2 bg-white rounded-b-md">
            <Search />
          </div>
          <HoldingsList />
        </div>
        <div className="min-h-screen">
          <div className="fixed max-w-6/12 w-6/12 h-full top-0 right-0">
            <Chart />
          </div>
        </div>
      </div>
    </Manager>
  );
};

export default Portfolio;
