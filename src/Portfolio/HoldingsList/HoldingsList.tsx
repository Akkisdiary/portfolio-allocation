import React from 'react';

import { usePortfolio } from '../Manager/hooks';
import TickersListItem from './HoldingsListItem';

const TickersList: React.FC<{}> = () => {
  const { tickers } = usePortfolio();

  return (
    <div className="grid gap-1">
      {tickers.map((tik) => (
        <TickersListItem key={tik.symbol} ticker={tik} />
      ))}
    </div>
  );
};

export default TickersList;
