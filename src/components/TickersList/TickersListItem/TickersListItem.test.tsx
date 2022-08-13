import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';

import { setUpServer } from '../../../api/mock/utils';
import { renderTickersList } from '../TickersList.test';

setUpServer([cleanup]);

const ticker = {
  url: "https://www.investing.com/equities/google-inc-company-profile",
  name: "Alphabet Inc Class A - Google",
  symbol: "GOOGL",
  quantity: 1,
};

describe("<TickersListItem />", () => {
  it("should show stock name and symbol", () => {
    renderTickersList([ticker]);
    expect(screen.getByText(/Alphabet Inc/i)).toBeVisible();
    expect(screen.getByText("GOOGL")).toBeVisible();
  });

  it("should fetch and display ticker detail", async () => {
    renderTickersList([
      {
        url: "https://www.investing.com/equities/google-inc-company-profile",
        name: "Alphabet Inc Class A - Google",
        symbol: "GOOGL",
        quantity: 1,
      },
    ]);
    expect(await screen.findByText(/119.70/i)).toBeVisible();
  });

  it("should have input box with provided quantity", () => {
    renderTickersList([ticker]);
    const input = screen.getByDisplayValue(1);
    expect(input).toBeVisible();
  });

  it("user should be able to update quantity", async () => {
    renderTickersList([ticker]);
    const input: HTMLInputElement = screen.getByDisplayValue(1);
    fireEvent.change(input, { target: { value: 4 } });
    await waitFor(() => {
      expect(input.value).toBe("4");
    });
  });

  it("should show loading while getting price", () => {
    // TODO: should show loading while getting price
  });

  it("should remove ticker from list", () => {
    // TODO: should remove ticker from list
  });

});
