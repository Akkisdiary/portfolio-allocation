import { createContext } from 'react';

import { Metric } from './enums';

import type { TickerDetail } from '../../api';
import type { TickerHolding, SelectableCategory, CurrencyRates } from './types';

export const SELECTABLE_CATEGORIES: SelectableCategory[] = ['sector', 'industry', 'country'];
export const DEFAULT_SELECTED_CATEGORY: SelectableCategory = 'sector';
export const DEFAULT_SELECTED_CURRENCY = 'usd';

export interface IPortfolioCtx {
  tickers: TickerHolding[];
  selectableCategories: SelectableCategory[];
  selectedCategory: SelectableCategory;
  selectableCurrencies: string[];
  selectedCurrency: string;
  currencyRates: CurrencyRates;
  metric: Metric;
  setMetric: (m: Metric) => void;
  updateTicker: (symbol: string, newValue: TickerHolding) => void;
  addTicker: (tik: TickerDetail) => void;
  availableTickers: () => TickerHolding[];
  removeTicker: (symbolToRemove: string) => void;
  updateSelectedCategory: (cat: SelectableCategory) => void;
  setSelectedCurrency: (code: string) => void;
}

const PortfolioCtx = createContext<IPortfolioCtx>({
  tickers: [],
  selectableCategories: SELECTABLE_CATEGORIES,
  selectedCategory: DEFAULT_SELECTED_CATEGORY,
  selectableCurrencies: [],
  selectedCurrency: DEFAULT_SELECTED_CURRENCY,
  currencyRates: {},
  metric: Metric.PERCENTAGE,
  setMetric: () => {},
  updateTicker: () => {},
  addTicker: () => {},
  availableTickers: () => [],
  removeTicker: () => {},
  updateSelectedCategory: () => {},
  setSelectedCurrency: () => {},
});

export default PortfolioCtx;
