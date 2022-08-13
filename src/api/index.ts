import { search, detail } from "./tickers";
import type { Ticker, TickerDetail } from "./tickers/types";

export * from "./endpoints";
export * from "./tickers";

const Symbols: {
  search: (q: string) => Promise<Ticker[]>;
  detail: (symbol: string) => Promise<TickerDetail>;
} = {
  search,
  detail,
};

export default Symbols;
