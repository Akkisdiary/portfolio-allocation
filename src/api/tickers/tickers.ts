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
  const config = {headers: { accept: 'application/json' }};
  const f1 = fetch(Endpoints.CurrencyRates("inrusd"), config);
  const f2 = fetch(Endpoints.CurrencyRates("usdinr"), config);

  const [r1, r2] = await Promise.all([f1, f2]);
  const [j1, j2]: CurrencyRatesResponse[] = await Promise.all([r1.json(), r2.json()])

  return [...j1.data, ...j2.data];
};
