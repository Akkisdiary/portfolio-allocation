import { TickerDetail } from '../../api';

export interface TickerHolding extends TickerDetail {
  quantity: number;
}

export type SelectableCategory = 'sector' | 'industry' | 'country';

export type ExchangeRates = {
  [key: string]: number;
};
