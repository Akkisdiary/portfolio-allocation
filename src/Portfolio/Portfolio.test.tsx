import { render, screen, cleanup, fireEvent, waitFor, within } from '@testing-library/react';

import Portfolio from './Portfolio';
import { setUpServer } from '../api/mock/utils';
import { searchInput, suggsBoxToBeVisible } from './Search/Search.test';

setUpServer([cleanup]);

const withinHoldingsSection = () => within(screen.getByTestId('holdings-section'));

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
  });

  it('should render holdings as pie chart', () => {
    render(<Portfolio />);
  });
});
