import React, { useEffect, useState } from 'react';

import { usePortfolio } from '../../Manager/hooks';
import type { TickerHolding } from '../../Manager/types';
import TickerApi from '../../../api';
import Input from '../../../components/Input';
import { Skeleton, DeleteBtn } from '../../../components';

interface ITickersListItemProps {
  ticker: TickerHolding;
}

const TickersListItem: React.FC<ITickersListItemProps> = ({ ticker }) => {
  const { updateTicker, removeTicker, selectedCategory } = usePortfolio();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!ticker.sector) {
      setIsLoading(true);
      TickerApi.detail(ticker.url).then((d) => {
        const updatedData = { ...ticker, ...d };
        updateTicker(ticker.symbol, updatedData);
        setIsLoading(false);
      });
    }
  }, [ticker, updateTicker]);

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
      className="grid grid-cols-6 items-center gap-2 px-4 py-2 text-sm"
      data-testid="holdings-list-item"
    >
      <div className="col-span-2">
        <h3 className="font-bold">{ticker.symbol}</h3>
        <p className="text-sm text-slate-500">{ticker.name}</p>
      </div>
      <div className="col-span-1">{isLoading ? <Skeleton.Text size="sm" /> : ticker.price}</div>
      <div className="col-span-2">{isLoading ? <Skeleton.Text /> : ticker[selectedCategory]}</div>
      <div className="col-span-1 inline-flex items-center gap-1">
        <Input
          type="number"
          min={1}
          value={ticker.quantity}
          onChange={updateQuantity}
          className="max-w-[4rem] py-1 pl-2 pr-1"
        />
        <DeleteBtn onClick={handleRemoveTicker} />
      </div>
    </div>
  );
};

export default TickersListItem;
