import { search, currencyRates } from './tickers';
import type { TickerDetail, CurrencyConversionRate } from './tickers/types';

export * from './endpoints';
export * from './tickers';

const TickerApi: {
  search: (q: string) => Promise<TickerDetail[]>;
  currencyRates: (c: string) => Promise<CurrencyConversionRate[]>;
} = {
  search,
  currencyRates,
};

export default TickerApi;
