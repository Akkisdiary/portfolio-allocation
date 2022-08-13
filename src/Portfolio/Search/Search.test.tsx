import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

import Manager from '../Manager';
import { setUpServer } from '../../api/mock/utils';
import Search from './Search';

setUpServer([cleanup]);

export const searchInput = () => screen.getByPlaceholderText<HTMLInputElement>(/search/i);

export const suggsBoxToBeVisible = async () => {
  const box = screen.getAllByRole('listbox')[0];
  await waitFor(() => {
    expect(box).toBeVisible();
  });

  const opts = screen.queryAllByRole('option');
  opts.forEach((s) => expect(s).toBeVisible());
};

const renderSearch = () => {
  render(
    <Manager>
      <Search />
    </Manager>
  );
};

describe('<Search />', () => {
  it('should have input field', () => {
    render(<Search />);
    const input = searchInput();
    expect(input).toBeVisible();
  });

  it('should take user input', async () => {
    render(<Search />);
    const input = searchInput();

    fireEvent.change(input, { target: { value: 'AMZN' } });
    await waitFor(() => {
      expect(input.value).toBe('AMZN');
    });

    await suggsBoxToBeVisible();
  });

  it('should show stock suggestions', async () => {
    render(<Search />);
    const input = searchInput();

    fireEvent.change(input, { target: { value: 'Alphabet' } });
    input.focus();

    await suggsBoxToBeVisible();
    const opts = await screen.findAllByRole('option');
    opts.forEach((s) => expect(s).toBeVisible());
  });

  it('should clear input when suggestion is selected', async () => {
    renderSearch();
    const input = searchInput();
    fireEvent.change(input, { target: { value: 'Alphabet' } });
    input.focus();

    const opt = (await screen.findAllByText(/alphabet/i))[0];
    fireEvent.click(opt);

    await waitFor(() => {
      expect(input.value).toBe('');
    });
    await suggsBoxToBeVisible();
  });
});
