import React, { useCallback, useState } from 'react';

import PortfolioCtx from './context';
import type { Ticker } from '../../api';
import type { TickerHolding } from './types';

const Manager: React.FC<{
  initialData?: TickerHolding[];
  children?: React.ReactNode;
}> = ({ children, initialData = [] }) => {
  const [tickers, setTickers] = useState<TickerHolding[]>(initialData);

  const updateTicker = (symbol: string, newValue: TickerHolding) => {
    const updated = tickers.map((tik) => {
      if (tik.symbol === symbol) {
        return { ...tik, ...newValue };
      }
      return tik;
    });

    setTickers(updated);
  };

  const addTicker = (tik: Ticker) => {
    const newTik: TickerHolding = { ...tik, quantity: '1' };
    setTickers([...tickers, newTik]);
  };

  const availableTickers = useCallback(() => {
    return tickers.filter((tik) => !!tik.sector);
  }, [tickers]);

  const removeTicker = (symbolToRemove: string) => {
    const updatedValue = tickers.filter((tik) => tik.symbol !== symbolToRemove);
    setTickers(updatedValue);
  };

  return (
    <PortfolioCtx.Provider
      value={{ tickers, updateTicker, addTicker, availableTickers, removeTicker }}
    >
      {children}
    </PortfolioCtx.Provider>
  );
};

export default Manager;
