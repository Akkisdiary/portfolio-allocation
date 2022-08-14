import React, { useCallback, useState } from 'react';
import Autosuggest, { type SuggestionSelectedEventData } from 'react-autosuggest';

import TickerApi from '../../api';
import type { Ticker } from '../../api';
import { usePortfolio } from '../Manager/hooks';
import Suggestion from './Suggestion';
import { SearchIcon } from '../../components';

const SearchInput: React.FC<Autosuggest.RenderInputComponentProps> = ({ className, ...props }) => (
  <div className="relative text-slate-500 w-full">
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <SearchIcon />
    </span>
    <input
      type="search"
      className="py-2 text-sm w-full bg-slate-100 shadow-sm rounded-md pl-10 focus:outline-none focus:bg-white border transition translate-colors focus:shadow-md focus:border-slate-300 text-slate-700 placeholder-slate-500"
      autoComplete="off"
      {...props}
    />
  </div>
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
