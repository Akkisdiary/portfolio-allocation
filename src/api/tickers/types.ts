export interface TickerDetail {
  id: string;
  symbol: string;
  name: string;
  price: number;
  sector: string;
  industry: string;
  currency: string;
  exchange: string;
  country: string;
  // url: string;
}

export type Currency = {
  name: string;
  code: string;
};

export interface CurrencyConversionRate {
  id: string;
  from: Currency;
  to: Currency;
  rate: number;
}
