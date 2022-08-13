import React, { useEffect } from "react";
import Tickers from "../../../api";
import { usePortfolio } from "../../../Portfolio";

import { SelectedTickerDetail } from "../../../Portfolio/types";

interface ITickersListItemProps {
  ticker: SelectedTickerDetail;
}

const TickersListItem: React.FC<ITickersListItemProps> = ({ ticker }) => {
  const { updateTicker } = usePortfolio();

  useEffect(() => {
    if (!ticker.sector) {
      Tickers.detail(ticker.url).then((d) => {
        const updatedData = { ...ticker, ...d };
        updateTicker(ticker.symbol, updatedData);
      });
    }
  }, [ticker, updateTicker]);

  const updateQuantity = (e: React.FormEvent<HTMLInputElement>) => {
    const updatedValue = {
      ...ticker,
      quantity: parseInt(e.currentTarget.value) || undefined,
    };
    updateTicker(ticker.symbol, updatedValue);
  };

  return (
    <div
      className="flex justify-between p-2 border rounded text-start bg-slate-100"
      data-testid="ticker-list-item"
    >
      <div>
        <h3>{ticker.symbol}</h3>
        <p className="text-slate-500">{ticker.name}</p>
        <p className="text-slate-500">{ticker.sector}</p>
      </div>
      <div>
        <p className="font-bold">{ticker.price}</p>
      </div>
      <input
        type="number"
        min={1}
        value={ticker.quantity}
        onChange={updateQuantity}
        className="px-2 rounded-md shadow"
      />
    </div>
  );
};

export default TickersListItem;
