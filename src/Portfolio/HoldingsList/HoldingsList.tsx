import React, { useState } from 'react';

import { Button } from '../../components';
import TickerApi from '../../api';
import { usePortfolio } from '../Manager';
import HoldingsListItem from './HoldingsListItem';

const randomInteger = (limit: number) => Math.floor(Math.random() * limit)

const HoldingsList: React.FC = () => {
  const { tickers, selectedCategory, addTickers } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false)

  const fetchRandomTickers = async () => {
    setIsLoading(true);
    const tickers = await TickerApi.searchRandom(10)
    const randomTickers = tickers.map(t => {
      return { ...t, quantity: String(randomInteger(100))}
    })
    addTickers(randomTickers)
    setIsLoading(false);
  };

  return (
    <div
      className="rounded-md border border-slate-200 bg-white text-slate-800"
      data-testid="holdings-list"
    >
      <div className="grid w-full grid-cols-7 gap-2 border border-transparent border-b-slate-200 px-4 py-2 font-bold">
        <div className="col-span-2">Name</div>
        <div className="col-span-2">
          <span className="capitalize">{selectedCategory}</span>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1">CMP</div>
        <div className="col-span-1">Qty</div>
      </div>
      {tickers.length ? (
        tickers.map((tik) => <HoldingsListItem key={tik.symbol} ticker={tik} />)
      ) : (
        <>
          <div className="col-span-6 w-full py-4 text-center text-sm text-slate-500">
            <div className='mb-2'>
              <p>Search stocks to add them to your holdings, or</p>
            </div>
            <Button onClick={fetchRandomTickers} isLoading={isLoading}>Randomize</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default HoldingsList;
