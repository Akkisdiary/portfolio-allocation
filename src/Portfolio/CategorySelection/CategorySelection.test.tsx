import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';

import Manager from '../Manager';
import CategorySelection from './CategorySelection';

afterEach(cleanup);

const renderCategorySelection = () => {
  render(
    <Manager>
      <CategorySelection />
    </Manager>
  );
};

const selectInput = (): HTMLSelectElement => screen.getByTestId('category-selection');

describe('<CategorySelection />', () => {
  it('should have select input with default value', () => {
    renderCategorySelection();

    const select = selectInput();
    expect(select).toBeVisible();
    expect(select.value).not.toBeUndefined();
  });

  it('should show category options to select', async () => {
    renderCategorySelection();

    const select = selectInput();
    const opts = await within(select).findAllByRole('option');

    expect(opts.length).toBeGreaterThan(0);
    opts.forEach((o) => expect(o).toBeInTheDocument());
  });

  it('should change selection value', async () => {
    renderCategorySelection();

    const select = selectInput();
    fireEvent.click(select);

    const opts: HTMLOptionElement[] = within(select).queryAllByRole('option');
    const newValue = opts[opts.length - 1].value;
    fireEvent.change(select, { target: { value: newValue } });

    await waitFor(() => {
      expect(select.value).toBe(newValue);
    });
  });
});
