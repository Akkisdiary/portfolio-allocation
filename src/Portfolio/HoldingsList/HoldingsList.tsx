import React from 'react';

import { usePortfolio } from '../Manager';
import HoldingsListItem from './HoldingsListItem';

const HoldingsList: React.FC = () => {
  const { tickers, selectedCategory } = usePortfolio();

  return (
    <div
      className="rounded-md border border-slate-200 bg-white text-slate-800"
      data-testid="holdings-list"
    >
      <div className="grid w-full grid-cols-6 border border-transparent border-b-slate-200 px-4 py-2 font-bold">
        <div className="col-span-2">Name</div>
        <div className="col-span-1">CMP</div>
        <div className="col-span-2">
          <span className="capitalize">{selectedCategory}</span>
        </div>
        <div className="col-span-1">Qty</div>
      </div>
      {tickers.length ? (
        tickers.map((tik) => <HoldingsListItem key={tik.symbol} ticker={tik} />)
      ) : (
        <div className="col-span-6 w-full py-4 text-center text-sm text-slate-500">
          <p>Search stocks to add them here</p>
        </div>
      )}
    </div>
  );
};

export default HoldingsList;
