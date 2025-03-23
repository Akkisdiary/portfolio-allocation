import React, { useCallback, useEffect, useState, useMemo } from 'react';

import TickerApi, { CurrencyConversionRate } from '../../api';
import PortfolioCtx from './context'
import {
  DEFAULT_SELECTED_CATEGORY,
  DEFAULT_SELECTED_CURRENCY,
} from './constants';

import type { TickerDetail } from '../../api';
import type { ExchangeRates, SelectableCategory, TickerHolding } from './types';
import { priceByExchangeRate } from '../Chart/utils';

const Manager: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [holdings, setHoldings] = useState<TickerHolding[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<SelectableCategory>(DEFAULT_SELECTED_CATEGORY);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(DEFAULT_SELECTED_CURRENCY);
  const [currencyConversionData, setCurrencyConversionData] = useState<CurrencyConversionRate[]>([]);

  const exchangeRates: ExchangeRates = useMemo(() => {
    const _currencyRates: ExchangeRates = {};

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

  useEffect(() => {
    if (!exchangeRates.length) {
      TickerApi.currencyRates(DEFAULT_SELECTED_CURRENCY).then(setCurrencyConversionData);
    }
  }, []);

  useEffect(() => {
    setHoldings(old => {
      const _new = old.map(h => {
        const convertedPrice = priceByExchangeRate(h.price, h.currency, selectedCurrency, exchangeRates)
        h.price = parseFloat(convertedPrice.toFixed(1));
        h.currency = selectedCurrency
        return h
      })
      return _new;
    })
  }, [selectedCurrency]);

  const addToHoldings = (t: TickerDetail[]) => {
    setHoldings(old => {
      const newHoldings = t.map(t => {return { quantity: 1, ...t }}).filter(h => !!h.sector);
      return [...old, ...newHoldings];
    })
  };

  const updateHolding = (symbol: string, value: TickerHolding) => {
    setHoldings(old => {
      const _new = old.map(h => {
        if (h.symbol === symbol) {
          return { ...h, ...value };
        }
        return h;
      });
      return _new;
    })
  };

  const removeFromHoldings = (symbolToRemove: string) => {
    setHoldings(holdings.filter((tik) => tik.symbol !== symbolToRemove));
  };

  return (
    <PortfolioCtx.Provider
      value={{
        holdings,
        selectedCategory,
        selectedCurrency,
        selectableCurrencies,
        exchangeRates,
        updateHolding,
        addToHoldings,
        removeFromHoldings,
        setSelectedCategory,
        setSelectedCurrency,
      }}
    >
      {children}
    </PortfolioCtx.Provider>
  );
};

export default Manager;
