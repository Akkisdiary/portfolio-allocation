import { cleanup, fireEvent, render, screen, act, waitFor } from '@testing-library/react';

import { setUpServer } from '../../api/mock/utils';
import Manager from '../Manager';
import Search from './Search';
import { getSearchInput } from './utils';

setUpServer([cleanup]);

export const suggsBoxToBeVisible = async () => {
  const box = screen.getAllByRole('listbox')[0];
  await waitFor(() => {
    expect(box).toBeVisible();
  });

  const opts = screen.queryAllByRole('option');
  opts.forEach((s) => expect(s).toBeVisible());
};

describe('<Search />', () => {
  it('should have input field', () => {
    render(<Search />);
    const input = getSearchInput();
    expect(input).toBeVisible();
  });

  it('should take user input', async () => {
    render(<Search />);
    const input = getSearchInput();

    act(() => {
      fireEvent.change(input, { target: { value: 'AMZN' } });
    });
    expect(input.value).toBe('AMZN');
  });

  it('should show stock suggestions', async () => {
    render(<Search />);
    const input = getSearchInput();

    act(() => {
      input.focus();
      fireEvent.change(input, { target: { value: 'goog' } });
    });

    const opts = await screen.findAllByRole('option');
    opts.forEach((s) => expect(s).toBeVisible());
  });

  it('should clear input when suggestion is selected', async () => {
    render(
      <Manager>
        <Search />
      </Manager>
    );
    const input = getSearchInput();

    act(() => {
      fireEvent.change(input, { target: { value: 'goog' } });
      input.focus();
    });
    const opts = await screen.findAllByText(/alphabet/i);

    act(() => {
      fireEvent.click(opts[0]);
    });

    expect(input.value).toBe('');
  });
});
