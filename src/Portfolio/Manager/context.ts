import { createContext } from 'react';

import type { Ticker } from '../../api';
import type { TickerHolding, SelectableCategory } from './types';

export const SELECTABLE_CATEGORIES: SelectableCategory[] = ['sector', 'industry', 'country'];
export const DEFAULT_SELECTED_CATEGORY: SelectableCategory = 'sector';

export interface IPortfolioCtx {
  tickers: TickerHolding[];
  selectableCategories: SelectableCategory[];
  selectedCategory: SelectableCategory;
  updateTicker: (symbol: string, newValue: TickerHolding) => void;
  addTicker: (tik: Ticker) => void;
  availableTickers: () => TickerHolding[];
  removeTicker: (symbolToRemove: string) => void;
  updateSelectedCategory: (cat: SelectableCategory) => void;
}

const PortfolioCtx = createContext<IPortfolioCtx>({
  tickers: [],
  selectableCategories: SELECTABLE_CATEGORIES,
  selectedCategory: DEFAULT_SELECTED_CATEGORY,
  updateTicker: () => {},
  addTicker: () => {},
  availableTickers: () => [],
  removeTicker: () => {},
  updateSelectedCategory: () => {},
});

export default PortfolioCtx;
