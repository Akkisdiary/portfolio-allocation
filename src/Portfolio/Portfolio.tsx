import React, { useState } from "react";

import { Ticker } from "../api";
import PortfolioCtx from "./context";
import { SelectedTickerDetail } from "./types";

const Portfolio: React.FC<{
  initialData?: SelectedTickerDetail[];
  children?: React.ReactNode;
}> = ({ children, initialData = [] }) => {
  const [tickers, setTickers] = useState<SelectedTickerDetail[]>(initialData);

  const updateTicker = (symbol: string, newValue: SelectedTickerDetail) => {
    const updated = tickers.map((tik) => {
      if (tik.symbol === symbol) {
        return { ...tik, ...newValue };
      }
      return tik;
    });

    setTickers(updated);
  };

  const addTicker = (tik: Ticker) => {
    const newTik: SelectedTickerDetail = { ...tik, quantity: 1 };
    setTickers([...tickers, newTik]);
  };

  const availableTickers = () => {
    return tickers.filter((tik) => !!tik.sector);
  };

  return (
    <PortfolioCtx.Provider value={{ tickers, updateTicker, addTicker, availableTickers }}>
      {children}
    </PortfolioCtx.Provider>
  );
};

export default Portfolio;
