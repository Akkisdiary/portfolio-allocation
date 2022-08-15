import { Endpoints } from '../endpoints/endpoints';
import { Ticker, TickerDetail } from './types';

interface SearchResponse {
  results: Ticker[];
  status_code: number;
}

interface DetailResponse {
  url: string;
  name: string;
  symbol: string;
  exchange: string;
  price: number;
  industry: string;
  sector: string;
  market: string;
  country: string;
  // status_code: string;
}

export const search = async (query: string): Promise<Ticker[]> => {
  const ep = Endpoints.TickerSearch(query);

  const res = await fetch(ep, {
    headers: { accept: 'application/json' },
    referrerPolicy: 'unsafe-url',
  });

  const data: SearchResponse = await res.json();
  return data.results;
};

export const detail = async (url: string): Promise<TickerDetail> => {
  const ep = Endpoints.TickerDetail(url);

  const res = await fetch(ep, {
    headers: { accept: 'application/json' },
    referrerPolicy: 'unsafe-url',
  });

  const data: DetailResponse = await res.json();
  return data;
};
