import React, { useCallback, useState } from 'react';

import PortfolioCtx, { DEFAULT_SELECTED_CATEGORY, SELECTABLE_CATEGORIES } from './context';

import type { Ticker } from '../../api';
import { Metric, SelectableCategory, TickerHolding } from './types';

const Manager: React.FC<{
  initialData?: TickerHolding[];
  selectableCategories?: SelectableCategory[];
  children?: React.ReactNode;
}> = ({ children, initialData = [], selectableCategories = SELECTABLE_CATEGORIES }) => {
  const [tickers, setTickers] = useState<TickerHolding[]>(initialData);
  const [selectedCategory, setSelectedCategory] =
    useState<SelectableCategory>(DEFAULT_SELECTED_CATEGORY);
  const [metric, setMetric] = useState(Metric.PERCENTAGE);

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

  const updateSelectedCategory = (cat: SelectableCategory) => setSelectedCategory(cat);

  return (
    <PortfolioCtx.Provider
      value={{
        tickers,
        selectableCategories,
        selectedCategory,
        metric,
        setMetric,
        updateTicker,
        addTicker,
        availableTickers,
        removeTicker,
        updateSelectedCategory,
      }}
    >
      {children}
    </PortfolioCtx.Provider>
  );
};

export default Manager;
