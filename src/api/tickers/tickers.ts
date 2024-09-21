import { Endpoints } from '../endpoints/endpoints';
import type { TickerDetail, CurrencyConversionRate } from './types';

interface SearchResponse {
  results: TickerDetail[];
  status_code: number;
}

interface CurrencyRatesResponse {
  data: CurrencyConversionRate[];
  status_code: string;
}

export const search = async (query: string): Promise<TickerDetail[]> => {
  const ep = Endpoints.TickerSearch(query);

  const res = await fetch(ep, {
    headers: { accept: 'application/json' },
  });

  const data: SearchResponse = await res.json();
  return data.results;
};

export const searchRandom = async (limit: number): Promise<TickerDetail[]> => {
  const ep = Endpoints.TickerSearchRandom(String(limit || 10));

  const res = await fetch(ep, {
    headers: { accept: 'application/json' },
  });

  const data: SearchResponse = await res.json();
  return data.results;
};

export const currencyRates = async (code: string): Promise<CurrencyConversionRate[]> => {
  const ep = Endpoints.CureencyRates(code);

  const res = await fetch(ep, {
    headers: { accept: 'application/json' },
  });

  const data: CurrencyRatesResponse = await res.json();
  return data.data;
};
