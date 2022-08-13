import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { setUpServer } from '../../api/mock/utils';
import Portfoil from '../../Portfolio';
import Search from './Search';

setUpServer([cleanup]);

const inputField = () =>
  screen.getByPlaceholderText<HTMLInputElement>(/search/i);

const suggsBoxToBeVisible = async () => {
  const box = screen.getAllByRole("listbox")[0];
  await waitFor(() => {
    expect(box).toBeVisible();
  });

  const opts = screen.queryAllByRole("option");
  opts.forEach((s) => expect(s).toBeVisible());
};

const renderSearch = () => {
  render(
    <Portfoil>
      <Search />
    </Portfoil>
  );
};

describe("<Search />", () => {
  it("should have input field", () => {
    render(<Search />);
    const input = inputField();
    expect(input).toBeVisible();
  });

  it("should take user input", async () => {
    render(<Search />);
    const input = inputField();

    fireEvent.change(input, { target: { value: "AMZN" } });
    await waitFor(() => {
      expect(input.value).toBe("AMZN");
    });

    await suggsBoxToBeVisible();
  });

  it("should show stock suggestions", async () => {
    render(<Search />);
    const input = inputField();

    fireEvent.change(input, { target: { value: "Alphabet" } });
    input.focus();
    
    await suggsBoxToBeVisible();
    const opts = await screen.findAllByRole("option");
    opts.forEach((s) => expect(s).toBeVisible());
  });

  it("should clear input when suggestion is selected", async () => {
    renderSearch();
    const input = inputField();
    fireEvent.change(input, { target: { value: "Alphabet" } });
    input.focus();
    
    const opt = (await screen.findAllByText(/alphabet/i))[0];
    fireEvent.click(opt);
    
    await waitFor(() => {
      expect(input.value).toBe("");
    });
    await suggsBoxToBeVisible();
  });
});
