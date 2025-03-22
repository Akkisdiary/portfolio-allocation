import { QueryParams } from './types';

const API_ORIGIN = process.env.REACT_APP_API_ORIGIN;

export const Endpoints = {
  TickerSearch: (query: string) => Url('/search', { query: query }),
  TickerSearchRandom: (limit: string) => Url('/search/random', { limit }),
  CurrencyRates: (code: string) => Url(`/currency/${code}`, {}),
};

export const Url = (path: string, params: QueryParams) => {
  const url = new URL(API_ORIGIN + path);
  Object.entries(params).forEach(([k, v]) => {
    url.searchParams.set(k, v);
  });
  return url.toString();
};
