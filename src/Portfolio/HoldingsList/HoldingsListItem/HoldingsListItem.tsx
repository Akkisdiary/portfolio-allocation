import React, { useEffect, useState } from 'react';

import { usePortfolio } from '../../Manager/hooks';
import type { TickerHolding } from '../../Manager/types';
import TickerApi from '../../../api';
import Input from '../../../components/Input';
import { Skeleton } from '../../../components';

interface ITickersListItemProps {
  ticker: TickerHolding;
}

const TickersListItem: React.FC<ITickersListItemProps> = ({ ticker }) => {
  const { updateTicker } = usePortfolio();
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

  return (
    <div
      className="grid grid-cols-6 px-4 py-2 text-sm gap-2 items-center"
      data-testid="holdings-list-item"
    >
      <div className="col-span-2">
        <h3 className="font-bold">{ticker.symbol}</h3>
        <p className="text-slate-500 text-sm">{ticker.name}</p>
      </div>
      <div className="col-span-1">{isLoading ? <Skeleton.Text size="sm" /> : ticker.price}</div>
      <div className="col-span-2">{isLoading ? <Skeleton.Text /> : ticker.sector}</div>
      <div className="col-span-1">
        <Input
          type="number"
          min={1}
          value={ticker.quantity}
          onChange={updateQuantity}
          className="pl-2 py-1 pr-1 max-w-[4rem]"
        />
      </div>
    </div>
  );
};

export default TickersListItem;
