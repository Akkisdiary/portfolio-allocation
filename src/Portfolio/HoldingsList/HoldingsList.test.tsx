import { cleanup, render, screen } from '@testing-library/react';

import { setUpServer } from '../../api/mock/utils';
import type { TickerHolding } from '../Manager/types';
import Manager from '../Manager';
import TickersList from './HoldingsList';

setUpServer([cleanup]);

const tickers = [
  {
    url: 'https://www.investing.com/equities/google-inc-company-profile',
    price: 120.96,
    industry: 'Interactive Media & Services',
    sector: 'Communication Services',
    market: 'United States',
    name: 'Alphabet Inc Class A',
    symbol: 'GOOGL',
    country: 'United States',
    quantity: '200',
  },
  {
    url: 'https://www.investing.com/equities/amazon-com-inc-company-profile',
    price: 143.84,
    industry: 'Internet & Direct Marketing Retail',
    sector: 'Consumer Discretionary',
    market: 'United States',
    name: 'Amazon.com Inc',
    symbol: 'AMZN',
    country: 'United States',
    quantity: '120',
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
});
