import { rest } from 'msw';
import { setupServer } from 'msw/node';

import type { TickerDetail } from '../tickers/types';

export const data: TickerDetail[] = [
  {
    id: 'NASDAQ:META',
    symbol: 'META',
    name: 'Meta Platforms, Inc.',
    price: 179.3385,
    sector: 'Technology Services',
    industry: 'Internet Software/Services',
    currency: 'USD',
    exchange: 'NASDAQ',
    country: 'United States',
    // url: 'https://www.tradingview.com/symbols/META/',
  },
  {
    id: 'NASDAQ:AMZN',
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    price: 144.34,
    sector: 'Retail Trade',
    industry: 'Internet Retail',
    currency: 'USD',
    exchange: 'NASDAQ',
    country: 'United States',
    // url: 'https://www.tradingview.com/symbols/AMZN/',
  },
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
  },
  {
    id: 'NASDAQ:NFLX',
    symbol: 'NFLX',
    name: 'Netflix, Inc.',
    price: 247.215,
    sector: 'Technology Services',
    industry: 'Internet Software/Services',
    currency: 'USD',
    exchange: 'NASDAQ',
    country: 'United States',
    // url: 'https://www.tradingview.com/symbols/NFLX/',
  },
  {
    id: 'NASDAQ:TSLA',
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 927.5,
    sector: 'Consumer Durables',
    industry: 'Motor Vehicles',
    currency: 'USD',
    exchange: 'NASDAQ',
    country: 'United States',
    // url: 'https://www.tradingview.com/symbols/TSLA/',
  },
];

const handlers = [
  rest.get('*/search', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');

    const result = data.filter((d) => new RegExp(query!, 'i').test(d.symbol));

    return res(
      ctx.status(200),
      ctx.json({
        status_code: 200,
        results: result,
      })
    );
  }),
];

const server = setupServer(...handlers);

export default server;
