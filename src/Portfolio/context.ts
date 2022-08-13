import { createContext, useContext } from "react";
import { Ticker } from "../api";
import { SelectedTickerDetail } from "./types";

export interface IPortfolioCtx {
  tickers: SelectedTickerDetail[];
  updateTicker: (symbol: string, newValue: SelectedTickerDetail) => void;
  addTicker: (tik: Ticker) => void;
  availableTickers: () => SelectedTickerDetail[];
}

const PortfolioCtx = createContext<IPortfolioCtx>({
  tickers: [],
  updateTicker: () => {},
  addTicker: () => {},
  availableTickers: () => [],
});

export const usePortfolio = () => useContext(PortfolioCtx);

export default PortfolioCtx;
