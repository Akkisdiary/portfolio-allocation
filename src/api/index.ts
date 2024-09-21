import { search, searchRandom, currencyRates } from './tickers';
import type { TickerDetail, CurrencyConversionRate } from './tickers/types';

export * from './endpoints';
export * from './tickers';

const TickerApi: {
  search: (q: string) => Promise<TickerDetail[]>;
  searchRandom: (limit: number) => Promise<TickerDetail[]>;
  currencyRates: (c: string) => Promise<CurrencyConversionRate[]>;
} = {
  search,
  searchRandom,
  currencyRates,
};

export default TickerApi;
