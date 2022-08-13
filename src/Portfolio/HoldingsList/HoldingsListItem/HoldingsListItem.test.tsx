import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';

import { setUpServer } from '../../../api/mock/utils';
import { renderTickersList } from '../HoldingsList.test';

setUpServer([cleanup]);

const tickers = [
  {
    url: 'https://www.investing.com/equities/google-inc-company-profile',
    name: 'Alphabet Inc Class A - Google',
    symbol: 'GOOGL',
    quantity: '1',
  },
];

describe('<HoldingsListItem />', () => {
  it('should show stock name and symbol', () => {
    renderTickersList(tickers);
    expect(screen.getByText(/Alphabet Inc/i)).toBeVisible();
    expect(screen.getByText('GOOGL')).toBeVisible();
  });

  it('should fetch and display ticker detail', async () => {
    renderTickersList(tickers);
    expect(await screen.findByText(/119.70/i)).toBeVisible();
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

  it('should show loading while getting price', () => {
    // TODO: should show loading while getting price
  });

  it('should remove ticker from list', () => {
    // TODO: should remove ticker from list
  });
});
