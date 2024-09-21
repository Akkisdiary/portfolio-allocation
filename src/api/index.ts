import { search, searchRandom, currencyRates } from './tickers';

export * from './endpoints';
export * from './tickers';

const TickerApi = {
  search,
  searchRandom,
  currencyRates,
};

export default TickerApi;
