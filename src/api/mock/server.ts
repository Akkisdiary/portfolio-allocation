import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { tickersData, currencyData } from './data';

const handlers = [
  rest.get('*/search', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');

    const result = tickersData.filter((d) => new RegExp(query!, 'i').test(d.symbol));

    return res(
      ctx.status(200),
      ctx.json({
        status_code: 200,
        results: result,
      })
    );
  }),
  rest.get('*/currency/:code', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status_code: 200,
        data: currencyData,
      })
    );
  }),
];

const server = setupServer(...handlers);

export default server;
