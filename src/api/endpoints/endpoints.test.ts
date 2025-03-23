import { cleanup } from '@testing-library/react';

import { Endpoints, Url } from './endpoints';

afterEach(cleanup);

describe('Url()', () => {
  it('should add query params to url', () => {
    const url = Url('/path', { key1: 'value1' });
    expect(url).toBe('http://test.xyz/path?key1=value1');
  });
});

describe('Endpoints()', () => {
  it('should return search url', () => {
    const url = Endpoints.TickerSearch('infy');
    expect(url).toBe('http://test.xyz/search?query=infy');
  });

  it('should return currency rates url', () => {
    const url = Endpoints.CurrencyRates('inr');
    expect(url).toBe('http://test.xyz/currency/inr');
  });
});
