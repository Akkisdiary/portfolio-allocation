import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';

import { setUpServer } from '../api/mock/utils';
import Portfolio from './Portfolio';

setUpServer([cleanup]);

const getSearchInput = () => screen.getByPlaceholderText<HTMLInputElement>(/search/i);
const getGraphSection = () => screen.getByTestId('graph-section');
const getHoldingsList = () => screen.getByTestId('holdings-list');

describe('<Portfolio />', () => {
  it('should add ticker suggestion from search to holdings list', async () => {
    render(<Portfolio />);

    const search = getSearchInput();
    const holdingsList = getHoldingsList();

    expect(within(holdingsList).getByText(/search stocks/i)).toBeVisible();

    act(() => {
      search.focus();
      fireEvent.change(search, { target: { value: 'goog' } });
    });

    const opt = await screen.findAllByText(/alphabet/i);
    fireEvent.click(opt[0]);

    expect(await within(holdingsList).findAllByTestId('holdings-list-item')).toHaveLength(1);
  });

  it('should change the selected category column title', async () => {
    render(<Portfolio />);

    const graphSection = getGraphSection();
    const holdingsList = getHoldingsList();

    const categorySelector: HTMLSelectElement =
      within(graphSection).getByTestId('category-selection');

    expect(categorySelector.value).toBe('sector');
    expect(within(holdingsList).getByText(/sector/i)).toBeVisible();

    const opts: HTMLOptionElement[] = within(categorySelector).getAllByRole('option');
    const newValue = opts[opts.length - 1].value;
    fireEvent.change(categorySelector, { target: { value: newValue } });

    await waitFor(() => {
      expect(categorySelector.value).toBe(newValue);
      expect(within(holdingsList).getByText(new RegExp(newValue, 'i'))).toBeVisible();
    });
  });
});
