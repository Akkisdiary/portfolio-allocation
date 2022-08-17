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
    const stocks = await Tickers.search('goog');
    expect(stocks).toStrictEqual([
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
      },
    ]);
  });
});
