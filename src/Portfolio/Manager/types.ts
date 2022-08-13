import { TickerDetail } from '../../api';

export interface TickerHolding extends TickerDetail {
  quantity?: string;
}
