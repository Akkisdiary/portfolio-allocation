import { TickerDetail } from "../api";

export interface SelectedTickerDetail extends TickerDetail {
  quantity?: number;
}
