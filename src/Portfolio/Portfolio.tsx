import React from 'react';

import Manager from './Manager';
import Search from './Search';
import TickersList from './HoldingsList';
import Chart from './Chart';
import { Screen } from '../components';

const Portfolio: React.FC = () => {
  return (
    <Screen>
      <Manager>
        <div className="h-full flex flex-col">
          <div className="mt-8 mb-16 flex justify-center">
            <Search />
          </div>
          <div className="flex-1 grid grid-cols-2">
            <TickersList />
            {/* <Chart /> */}
          </div>
        </div>
      </Manager>
    </Screen>
  );
};

export default Portfolio;
