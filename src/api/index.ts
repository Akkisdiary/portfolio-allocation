import { search } from './tickers';
import type { TickerDetail } from './tickers/types';

export * from './endpoints';
export * from './tickers';

const TickerApi: {
  search: (q: string) => Promise<TickerDetail[]>;
} = {
  search,
};

export default TickerApi;
