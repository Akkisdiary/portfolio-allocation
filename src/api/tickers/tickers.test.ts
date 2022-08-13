import { cleanup } from '@testing-library/react';

import Tickers from '../';
import server from '../mock/server';

beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());

describe('Tickers.search()', () => {
  it('should return list of stocks', async () => {
    const stocks = await Tickers.search('google');
    expect(stocks).toStrictEqual([
      {
        url: 'https://www.investing.com/equities/google-inc-company-profile',
        name: 'Alphabet Inc Class A - Google',
        symbol: 'GOOGL',
        exchange: 'Stock - NASDAQ equities',
      },
    ]);
  });
});

describe('Tickers.detail()', () => {
  it('should return stock detail', async () => {
    const stocks = await Tickers.detail(
      'https://www.investing.com/equities/google-inc-company-profile'
    );
    expect(stocks).toStrictEqual({
      url: 'https://www.investing.com/equities/google-inc-company-profile',
      price: '119.70',
      industry: 'Interactive Media & Services',
      sector: 'Communication Services',
      market: 'United States',
      name: 'Alphabet Inc Class A - Google',
      symbol: 'GOOGL',
      country: 'United States',
      status_code: 200,
    });
  });
});
