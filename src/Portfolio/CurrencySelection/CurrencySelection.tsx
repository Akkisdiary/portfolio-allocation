import React from 'react';

import { usePortfolio } from '../Manager';
import { Select } from '../../components';

const CurrencySelection: React.FC = () => {
  const { selectableCurrencies, selectedCurrency, setSelectedCurrency } = usePortfolio();

  const currencyChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.currentTarget.value);
  };

  return (
    <Select
      value={selectableCurrencies.find(o => o.toLowerCase() === selectedCurrency.toLowerCase())}
      onChange={currencyChangeHandler}
      options={selectableCurrencies}
      data-testid="currency-selection"
    />
  );
};

export default CurrencySelection;
