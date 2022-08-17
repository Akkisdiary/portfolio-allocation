import { cleanup, render, screen } from '@testing-library/react';

import { setUpServer } from '../../api/mock/utils';
import Manager from '../Manager';
import TickersList from './HoldingsList';

import type { TickerHolding } from '../Manager';

setUpServer([cleanup]);

const tickers = [
  {
    id: 'NASDAQ:AAPL',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 173.14,
    sector: 'Electronic Technology',
    industry: 'Telecommunications Equipment',
    currency: 'USD',
    exchange: 'NASDAQ',
    country: 'United States',
    // url: 'https://www.tradingview.com/symbols/AAPL/',
    quantity: '1',
  },
  {
    id: 'NASDAQ:GOOG',
    symbol: 'GOOG',
    name: 'Alphabet Inc.',
    price: 122.72,
    sector: 'Technology Services',
    industry: 'Internet Software/Services',
    currency: 'USD',
    exchange: 'NASDAQ',
    country: 'United States',
    // url: 'https://www.tradingview.com/symbols/GOOG/',
    quantity: '1',
  },
];

export const renderTickersList = (data: TickerHolding[]) => {
  render(
    <Manager initialData={data}>
      <TickersList />
    </Manager>
  );
};

describe('<HoldingsList />', () => {
  it('should render a list of provided tickers', () => {
    renderTickersList(tickers);
    const items = screen.getAllByTestId('holdings-list-item');
    expect(items).toHaveLength(2);
  });

  it('should show call to action message if no stocks are added to portfolio', () => {
    renderTickersList([]);
    const msg = screen.getByText(/search stocks to add them here/i);
    expect(msg).toBeVisible();
  });
});
