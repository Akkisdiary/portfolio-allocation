export interface Ticker {
  url: string;
  name: string;
  symbol: string;
  // exchange: string;
}

export interface TickerDetail extends Ticker {
  price?: number;
  industry?: string;
  sector?: string;
  market?: string;
  country?: string;
}
