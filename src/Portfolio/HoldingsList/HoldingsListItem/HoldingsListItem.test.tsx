import { cleanup, fireEvent, screen, waitFor, within } from '@testing-library/react';

import { setUpServer } from '../../../api/mock/utils';
import { renderTickersList } from '../HoldingsList.test';

setUpServer([cleanup]);

const tickers = [
  {
    id: 'NASDAQ:GOOG',
    symbol: 'GOOG',
    name: 'Alphabet Inc.',
    price: 122.72,
    sector: 'Technology Services',
    industry: 'Internet Software/Services',
    currency: 'USD',
    exchange: 'NASDAQ',
    country: 'United States',
    // url: 'https://www.tradingview.com/symbols/GOOG/',
    quantity: '1',
  },
];

describe('<HoldingsListItem />', () => {
  it('should show stock name and symbol', () => {
    renderTickersList(tickers);
    expect(screen.getByText(/Alphabet Inc/i)).toBeVisible();
    expect(screen.getByText('GOOG')).toBeVisible();
  });

  it('should display ticker price and sector', async () => {
    renderTickersList(tickers);
    expect(await screen.findByText(/122.72/i)).toBeVisible();
    expect(await screen.findByText(/Technology Services/i)).toBeVisible();
  });

  it('should have input box with provided quantity', () => {
    renderTickersList(tickers);
    const input = screen.getByDisplayValue(1);
    expect(input).toBeVisible();
  });

  it('user should be able to update quantity', async () => {
    renderTickersList(tickers);
    const input: HTMLInputElement = screen.getByDisplayValue(1);
    fireEvent.change(input, { target: { value: 4 } });
    await waitFor(() => {
      expect(input.value).toBe('4');
    });
  });

  it('should remove ticker from list', async () => {
    renderTickersList(tickers);

    const list = await screen.findAllByTestId('holdings-list-item');
    const listLength = list.length;
    const btn = within(list[0]).getByTestId('delete-btn');
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.queryAllByTestId('holdings-list-item')).toHaveLength(listLength - 1);
    });
  });
});
