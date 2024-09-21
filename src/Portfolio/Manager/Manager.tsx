import React, { useCallback, useEffect, useState, useMemo } from 'react';

import TickerApi, { CurrencyConversionRate } from '../../api';
import PortfolioCtx, {
  DEFAULT_SELECTED_CATEGORY,
  DEFAULT_SELECTED_CURRENCY,
  SELECTABLE_CATEGORIES,
} from './context';
import { Metric } from './enums';

import type { TickerDetail } from '../../api';
import type { CurrencyRates, SelectableCategory, TickerHolding } from './types';

const Manager: React.FC<{
  initialData?: TickerHolding[];
  selectableCategories?: SelectableCategory[];
  children?: React.ReactNode;
}> = ({ children, initialData = [], selectableCategories = SELECTABLE_CATEGORIES }) => {
  const [tickers, setTickers] = useState<TickerHolding[]>(initialData);
  const [selectedCategory, setSelectedCategory] =
    useState<SelectableCategory>(DEFAULT_SELECTED_CATEGORY);
  const [metric, setMetric] = useState(Metric.PERCENTAGE);
  const [currencyConversionData, setCurrencyConversionData] = useState<CurrencyConversionRate[]>(
    []
  );
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_SELECTED_CURRENCY);

  const updateTicker = (symbol: string, newValue: TickerHolding) => {
    const updated = tickers.map((tik) => {
      if (tik.symbol === symbol) {
        return { ...tik, ...newValue };
      }
      return tik;
    });

    setTickers(updated);
  };

  const addTicker = (tik: TickerDetail) => {
    const newTik: TickerHolding = { ...tik, quantity: '1' };
    setTickers([...tickers, newTik]);
  };

  const addTickers = (tiks: TickerDetail[]) => {
    const newTiks: TickerHolding[] = tiks.map(t => {
      return {quantity: '1', ...t}
    });
    setTickers([...tickers, ...newTiks]);
  };

  const availableTickers = useCallback(() => {
    return tickers.filter((tik) => !!tik.sector);
  }, [tickers]);

  const removeTicker = (symbolToRemove: string) => {
    const updatedValue = tickers.filter((tik) => tik.symbol !== symbolToRemove);
    setTickers(updatedValue);
  };

  const updateSelectedCategory = (cat: SelectableCategory) => setSelectedCategory(cat);

  const selectableCurrencies: string[] = useMemo(() => {
    const _selectableCurrencies = new Set<string>();

    for (const conversionData of currencyConversionData) {
      const {
        to: { code: toCode },
      } = conversionData;

      _selectableCurrencies.add(toCode);
    }

    return Array.from(_selectableCurrencies);
  }, [currencyConversionData]);

  const currencyRates: CurrencyRates = useMemo(() => {
    const _currencyRates: CurrencyRates = {};

    for (const conversionData of currencyConversionData) {
      const {
        from: { code: fromCode },
        to: { code: toCode },
        rate,
      } = conversionData;

      _currencyRates[`${fromCode.toLowerCase()}-${toCode.toLowerCase()}`] = rate;
    }

    return _currencyRates;
  }, [currencyConversionData]);

  useEffect(() => {
    if (!currencyRates.length) {
      TickerApi.currencyRates(DEFAULT_SELECTED_CURRENCY).then(setCurrencyConversionData);
    }
  }, []);

  return (
    <PortfolioCtx.Provider
      value={{
        tickers,
        selectableCategories,
        selectedCategory,
        selectableCurrencies,
        selectedCurrency,
        currencyRates,
        metric,
        setMetric,
        updateTicker,
        addTicker,
        addTickers,
        availableTickers,
        removeTicker,
        updateSelectedCategory,
        setSelectedCurrency,
      }}
    >
      {children}
    </PortfolioCtx.Provider>
  );
};

export default Manager;
