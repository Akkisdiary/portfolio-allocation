import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';

import Manager from '../Manager';
import { setUpServer } from '../../api/mock/utils';
import CurrencySelection from './CurrencySelection';

setUpServer([cleanup]);

const renderCurrencySelection = () => {
  render(
    <Manager>
      <CurrencySelection />
    </Manager>
  );
};

const selectInput = (): HTMLSelectElement => screen.getByTestId('currency-selection');

describe('<CurrencySelection />', () => {
  it('should have select input with default value', () => {
    renderCurrencySelection();

    const select = selectInput();
    expect(select).toBeVisible();
    expect(select.value).not.toBeUndefined();
  });

  it('should show currency options to select', async () => {
    renderCurrencySelection();

    const select = selectInput();
    const opts = await within(select).findAllByRole('option');

    expect(opts.length).toBeGreaterThan(0);
    opts.forEach((o) => expect(o).toBeInTheDocument());
  });

  it('should change selection value', async () => {
    renderCurrencySelection();

    const select = selectInput();
    fireEvent.click(select);

    const opts: HTMLOptionElement[] = await within(select).findAllByRole('option');
    const newValue = opts[opts.length - 1].value;
    fireEvent.change(select, { target: { value: newValue } });

    await waitFor(() => {
      expect(select.value).toBe(newValue);
    });
  });
});
