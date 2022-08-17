import { render, screen } from '@testing-library/react';

import Suggestion from './Suggestion';

describe('<Suggestion />', () => {
  it('should show ticker name, symbol & exchange', () => {
    const ticker = {
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
    };
    render(<Suggestion suggestion={ticker} />);

    expect(screen.getByText(/Alphabet Inc./i)).toBeVisible();
    expect(screen.getByText(/GOOG/i)).toBeVisible();
    expect(screen.getByText(/NASDAQ/i)).toBeVisible();
  });
});
