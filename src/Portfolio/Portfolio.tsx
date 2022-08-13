import React from 'react';

import Manager from './Manager';
import Search from './Search';
import HoldingsList from './HoldingsList';
import Chart from './Chart';
import { Screen } from '../components';

const Portfolio: React.FC = () => {
  return (
    <Manager>
      <Screen>
        <div className="h-full max-h-full grid grid-cols-2 p-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold">Protfolio by Sector</h1>
            <div className="pb-2 pt-4">
              <Search />
            </div>
            <HoldingsList />
          </div>
          <div className="w-full max-h-screen">
            <Chart />
          </div>
        </div>
      </Screen>
    </Manager>
  );
};

export default Portfolio;
