import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Portfolio from './Portfolio';
import { setUpServer } from '../api/mock/utils';
import { searchInput, suggsBoxToBeVisible } from './Search/Search.test';

setUpServer([cleanup]);

describe('<Portfolio App />', () => {
  it('should add ticker suggestion from search to holdings list', async () => {
    render(<Portfolio />);

    const search = searchInput();

    search.focus();
    fireEvent.change(search, { target: { value: 'google' } });

    const opt = (await screen.findAllByRole('option'))[0];
    fireEvent.click(opt);

    expect(await screen.findAllByTestId('holdings-list-item')).toHaveLength(1);
  });

  it('should render holdings as pie chart', () => {
    render(<Portfolio />);
  });
});
