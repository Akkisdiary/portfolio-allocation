import React from 'react';

import { usePortfolio } from '../Manager/hooks';
import HoldingsListItem from './HoldingsListItem';

const HoldingsList: React.FC = () => {
  const { tickers } = usePortfolio();

  return (
    <div className="rounded-md border border-slate-200">
      <div className="font-bold grid grid-cols-6 w-full border-transparent border border-b-slate-200 px-4 py-2">
        <div className="col-span-2">Name</div>
        <div className="col-span-1">CMP</div>
        <div className="col-span-2">Sector</div>
        <div className="col-span-1">Qty</div>
      </div>
      {tickers.length ? (
        tickers.map((tik) => <HoldingsListItem key={tik.symbol} ticker={tik} />)
      ) : (
        <div className="col-span-6 text-center w-full py-4 text-sm text-slate-500">
          <p>Search stocks to add them here</p>
        </div>
      )}
    </div>
  );
};

export default HoldingsList;
