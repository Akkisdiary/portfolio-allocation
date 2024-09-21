import React from 'react';

import { Input, DeleteButton } from '../../../components';
import { usePortfolio } from '../../Manager';

import type { TickerHolding } from '../../Manager';

interface ITickersListItemProps {
  ticker: TickerHolding;
}

const TickersListItem: React.FC<ITickersListItemProps> = ({ ticker }) => {
  const { updateTicker, removeTicker, selectedCategory } = usePortfolio();

  const updateQuantity = (e: React.FormEvent<HTMLInputElement>) => {
    const updatedValue = {
      ...ticker,
      quantity: e.currentTarget.value,
    };
    updateTicker(ticker.symbol, updatedValue);
  };

  const handleRemoveTicker = () => removeTicker(ticker.symbol);

  return (
    <div
      className="grid grid-cols-7 items-center gap-2 px-4 py-2 text-sm"
      data-testid="holdings-list-item"
    >
      <div className="col-span-2">
        <h3 className="font-bold">{ticker.symbol}</h3>
        <p className="text-sm text-slate-500">{ticker.name}</p>
      </div>
      <div className="col-span-2">{ticker[selectedCategory]}</div>
      <div className="col-span-1 text-end">{ticker.currency}
      </div>
      <div className="col-span-1 font-medium">{ticker.price}</div>
      <div className="col-span-1 inline-flex items-center gap-1">
        <Input
          type="number"
          min={1}
          value={ticker.quantity}
          onChange={updateQuantity}
          className="max-w-[4rem] py-1 pl-2 pr-1"
        />
        <DeleteButton onClick={handleRemoveTicker} />
      </div>
    </div>
  );
};

export default TickersListItem;
