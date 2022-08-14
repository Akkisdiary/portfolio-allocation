import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  within,
  prettyDOM,
} from '@testing-library/react';

import Portfolio from './Portfolio';
import { setUpServer } from '../api/mock/utils';
import { searchInput } from './Search/Search.test';

setUpServer([cleanup]);

const withinHoldingsSection = () => within(screen.getByTestId('holdings-section'));

const waitForLoaders = async () => {
  const loaders = screen.getAllByRole('status');
  await waitFor(() => {
    loaders.forEach((loader) => expect(loader).not.toBeInTheDocument());
  });
};

describe('<Portfolio App />', () => {
  it('should add ticker suggestion from search to holdings list', async () => {
    render(<Portfolio />);

    const search = searchInput();

    expect(withinHoldingsSection().queryAllByTestId('holdings-list-item')).toHaveLength(0);

    search.focus();
    fireEvent.change(search, { target: { value: 'google' } });

    const opt = (await withinHoldingsSection().findAllByRole('option'))[0];
    fireEvent.click(opt);

    expect(await withinHoldingsSection().findAllByTestId('holdings-list-item')).toHaveLength(1);

    await waitForLoaders();

    screen.debug();
  });

  it('should change the selected category column title', async () => {
    render(<Portfolio />);

    const graphSection = screen.getByTestId('graph-section');
    const holdingsList = screen.getByTestId('holdings-list');

    const categorySelector: HTMLSelectElement = within(graphSection).getByRole('combobox');

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
