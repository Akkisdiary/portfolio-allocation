import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Ticker } from '../tickers/types';

const data: Ticker[] = [
  {
    url: 'https://www.investing.com/equities/facebook-inc-company-profile',
    name: 'Meta Platforms Inc',
    symbol: 'META',
    exchange: 'Stock - NASDAQ equities',
  },
  {
    url: 'https://www.investing.com/equities/amazon-com-inc-company-profile',
    name: 'Amazon.com Inc',
    symbol: 'AMZN',
    exchange: 'Stock - NASDAQ equities',
  },
  {
    url: 'https://www.investing.com/equities/apple-computer-inc-company-profile',
    name: 'Apple Inc',
    symbol: 'AAPL',
    exchange: 'Stock - NASDAQ equities',
  },
  {
    url: 'https://www.investing.com/equities/netflix,-inc.-company-profile',
    name: 'Netflix Inc',
    symbol: 'NFLX',
    exchange: 'Stock - NASDAQ equities',
  },
  {
    url: 'https://www.investing.com/equities/google-inc-company-profile',
    name: 'Alphabet Inc Class A - Google',
    symbol: 'GOOGL',
    exchange: 'Stock - NASDAQ equities',
  },
];

const handlers = [
  rest.get('*/search', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');

    const result = data.filter((d) => new RegExp(query!, 'i').test(d.name));

    return res(
      ctx.status(200),
      ctx.json({
        status_code: 200,
        results: result,
      })
    );
  }),
  rest.get('*/detail', (req, res, ctx) => {
    const url = req.url.searchParams.get('url');

    return res(
      ctx.status(200),
      ctx.json({
        url: url,
        price: '119.70',
        industry: 'Interactive Media & Services',
        sector: 'Communication Services',
        market: 'United States',
        name: 'Alphabet Inc Class A - Google',
        symbol: 'GOOGL',
        country: 'United States',
        status_code: 200,
      })
    );
  }),
];

const server = setupServer(...handlers);

export default server;
