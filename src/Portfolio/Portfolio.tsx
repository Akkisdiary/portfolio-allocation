import './styles.css';

import React from 'react';

import Chart from './Chart';
import HoldingsList from './HoldingsList';
import Manager from './Manager';
import MetricSelection from './MetricSelection';
import CategorySelection from './CategorySelection';
import CurrencySelection from './CurrencySelection';
import Search from './Search';

const Portfolio: React.FC = () => {
  return (
    <Manager>
      <div className="bg-grid absolute inset-0 -z-10"></div>
      <div className="mt-4 mb-4 w-full px-2 text-center sm:mb-2 sm:text-start">
        <h1 className="text-3xl font-extrabold text-slate-700">Protfolio by Sector</h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div
          className="order-last mt-2 mb-32 flex flex-col gap-2 px-2 md:order-1"
          data-testid="holdings-section"
        >
          <div className="sticky top-0 z-50 rounded-b-md">
            <Search />
          </div>
          <HoldingsList />
        </div>
        <div
          className="relative order-2 h-full max-h-[50vh] min-h-[50vh] sm:max-h-[90vh] sm:min-h-[90vh]"
          data-testid="graph-section"
        >
          <div className="top-0 h-full sm:sticky sm:max-h-screen">
            <div className="absolute top-0 mt-2 flex w-full justify-center gap-2 px-2 sm:right-0 sm:justify-end md:mr-2">
              <CurrencySelection />
              <MetricSelection />
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
