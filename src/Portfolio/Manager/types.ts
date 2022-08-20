import { TickerDetail } from '../../api';

export interface TickerHolding extends TickerDetail {
  quantity?: string;
}

export type SelectableCategory = Exclude<
  keyof TickerHolding,
  'id' | 'name' | 'symbol' | 'price' | 'quantity'
>;

export type CurrencyRates = {
  [key: string]: number;
};
