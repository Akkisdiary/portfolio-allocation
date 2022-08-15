import { TickerDetail } from '../../api';

export interface TickerHolding extends TickerDetail {
  quantity?: string;
}

export type SelectableCategory = Exclude<keyof TickerHolding, 'quantity' | 'price' | 'name'>;

export enum Metric {
  VALUE = 'value',
  PERCENTAGE = 'percentage',
}
