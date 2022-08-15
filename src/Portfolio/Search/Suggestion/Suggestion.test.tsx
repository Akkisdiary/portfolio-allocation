import { render, screen } from '@testing-library/react';
import Suggestion from './Suggestion';

describe('<Suggestion />', () => {
  it('should show ticker name and symbol', () => {
    const ticker = {
      url: 'https://www.investing.com/equities/google-inc-company-profile',
      name: 'Alphabet Inc Class A',
      symbol: 'GOOGL',
      exchange: 'Stock - NASDAQ equities',
    };
    render(<Suggestion suggestion={ticker} />);
    expect(screen.getByText(/Alphabet Inc Class A/i)).toBeVisible();
    expect(screen.getByText(/GOOGL/i)).toBeVisible();
  });
});
