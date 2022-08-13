import React, { useState } from 'react';
import cx from 'classnames';
import Autosuggest, { type SuggestionSelectedEventData } from 'react-autosuggest';

import TickerApi from '../../api';
import type { Ticker } from '../../api';
import { usePortfolio } from '../Manager/hooks';
import Suggestion from './Suggestion';

const SearchInput: React.FC<Autosuggest.RenderInputComponentProps> = ({ className, ...props }) => (
  <input
    className={cx(
      'px-8 py-1 rounded-md block font-light border border-transparent focus:border-slate-200 transition-colors placeholder-slate-500 outline-0 bg-slate-200 focus:bg-white',
      className
    )}
    {...props}
  />
);

const Search: React.FC<{}> = (_) => {
  const [value, setValue] = useState('');
  const [suggs, setSuggs] = useState<Ticker[]>([]);

  const { addTicker } = usePortfolio();

  const changeHandler = (
    _: React.FormEvent<HTMLElement>,
    { newValue }: Autosuggest.ChangeEvent
  ) => {
    setValue(newValue);
  };

  const clearSuggs = () => setSuggs([]);
  const fetchSuggs = ({ value: newValue }: Autosuggest.SuggestionsFetchRequestedParams) => {
    if (newValue) {
      TickerApi.search(newValue).then((d) => {
        setSuggs(d);
      });
    }
  };

  const handleAddTicker = (
    _: React.FormEvent<HTMLElement>,
    { suggestion }: SuggestionSelectedEventData<Ticker>
  ) => {
    addTicker(suggestion);
    setValue('');
  };

  return (
    <Autosuggest
      suggestions={suggs}
      onSuggestionsFetchRequested={fetchSuggs}
      onSuggestionsClearRequested={clearSuggs}
      getSuggestionValue={(tik: Ticker) => tik.symbol}
      renderSuggestion={(tik: Ticker) => <Suggestion ticker={tik} />}
      onSuggestionSelected={handleAddTicker}
      inputProps={{
        placeholder: 'Search Stocks',
        value: value,
        onChange: changeHandler,
      }}
      renderInputComponent={SearchInput}
    />
  );
};

export default Search;
