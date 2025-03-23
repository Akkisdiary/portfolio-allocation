import { createContext } from "react";

import {
  DEFAULT_SELECTED_CATEGORY,
  DEFAULT_SELECTED_CURRENCY,
} from "./constants";

import type { TickerHolding, SelectableCategory, ExchangeRates } from "./types";

export interface IPortfolioCtx {
  holdings: TickerHolding[];
  selectedCategory: SelectableCategory;
  selectedCurrency: string;
  selectableCurrencies: string[];
  exchangeRates: ExchangeRates;
  addToHoldings: (tik: TickerHolding[]) => void;
  updateHolding: (symbol: string, newValue: TickerHolding) => void;
  removeFromHoldings: (symbolToRemove: string) => void;
  setSelectedCategory: (cat: SelectableCategory) => void;
  setSelectedCurrency: (code: string) => void;
}

const PortfolioCtx = createContext<IPortfolioCtx>({
  holdings: [],
  selectedCategory: DEFAULT_SELECTED_CATEGORY,
  selectableCurrencies: [],
  selectedCurrency: DEFAULT_SELECTED_CURRENCY,
  exchangeRates: {},
  updateHolding: () => {},
  addToHoldings: () => {},
  removeFromHoldings: () => {},
  setSelectedCategory: () => {},
  setSelectedCurrency: () => {},
});

export default PortfolioCtx;
