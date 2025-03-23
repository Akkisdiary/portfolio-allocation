import './styles.css';

import React from 'react';

import Chart from './Chart';
import HoldingsList from './HoldingsList';
import Manager from './Manager';
import CategorySelection from './CategorySelection';
import CurrencySelection from './CurrencySelection';
import Search from './Search';
import { GithubIcon } from '../components';

const Portfolio: React.FC = () => {
  return (
    <Manager>
      <div className="bg-grid absolute inset-0 -z-10"></div>
      <div className="mt-4 mb-4 w-full px-2 text-center sm:mb-2 sm:text-start flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-slate-700 truncate">Portfolio Allocation</h1>
        <a href="https://github.com/Akkisdiary/portfolio-allocation" target="_blank" rel="noreferrer" className="inline-flex font-mono text-sm text-slate-500 underline p-1 gap-1 items-center">
          <span>source code</span>
          <GithubIcon />
        </a>
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
          className="relative order-2"
          data-testid="graph-section"
        >
          <div className="top-0 sm:sticky">
            <div className="mt-2 flex w-full justify-center gap-2 px-2">
              <CurrencySelection />
              <CategorySelection />
            </div>
            <div className="p-4 sm:py-12"><Chart /></div>
          </div>
        </div>
      </div>
    </Manager>
  );
};

export default Portfolio;
