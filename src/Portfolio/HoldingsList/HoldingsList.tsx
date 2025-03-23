import React, { useState } from 'react';

import { LitUpButton } from '../../components';
import TickerApi from '../../api';
import { usePortfolio } from '../Manager';
import HoldingsListItem from './HoldingsListItem';

const randomInteger = (limit: number) => Math.floor(Math.random() * limit)

const HoldingsList: React.FC = () => {
  const { holdings, selectedCategory, addToHoldings } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false)

  const fetchRandomTickers = async () => {
    setIsLoading(true);
    const tickers = await TickerApi.searchRandom(10)
    const randomTickers = tickers.map(t => {
      return { ...t, quantity: randomInteger(100)}
    })
    addToHoldings(randomTickers)
    setIsLoading(false);
  };

  return (
    <div
      className="rounded-md border border-slate-200 bg-white text-slate-800"
      data-testid="holdings-list"
    >
      <div className="grid w-full grid-cols-7 gap-2 border border-transparent border-b-slate-200 p-2 font-bold">
        <div className="col-span-2">Name</div>
        <div className="col-span-2">
          <span className="capitalize">{selectedCategory}</span>
        </div>
        <div className="col-span-1">CMP</div>
        <div className="col-span-2">Qty</div>
      </div>
      {holdings.length ? (
        holdings.map((tik) => <HoldingsListItem key={tik.symbol} ticker={tik} />)
      ) : (
        <>
          <div className="col-span-6 w-full py-4 text-center text-sm text-slate-500">
            <div className='mb-2'>
              <p>Search stocks to add them to your holdings, or</p>
            </div>
            <LitUpButton onClick={fetchRandomTickers} isLoading={isLoading}>Randomize</LitUpButton>
          </div>
        </>
      )}
    </div>
  );
};

export default HoldingsList;
