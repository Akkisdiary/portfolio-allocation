import React, { useState } from 'react';
import Autosuggest, { SuggestionSelectedEventData } from 'react-autosuggest';

import Tickers, { Ticker } from '../../api';
import { usePortfolio } from '../../Portfolio';
import Suggestion from './Suggestion';

const Search: React.FC<{}> = (_) => {
  const [value, setValue] = useState("");
  const [suggs, setSuggs] = useState<Ticker[]>([]);

  const { addTicker } = usePortfolio();

  const changeHandler = (
    _: React.FormEvent<HTMLElement>,
    { newValue }: Autosuggest.ChangeEvent
  ) => {
    setValue(newValue);
  };

  const clearSuggs = () => setSuggs([]);
  const fetchSuggs = ({
    value: newValue,
  }: Autosuggest.SuggestionsFetchRequestedParams) => {
    if (newValue) {
      Tickers.search(newValue).then((d) => {
        setSuggs(d);
      });
    }
  };

  const handleAddTicker = (
    _: React.FormEvent<HTMLElement>,
    { suggestion }: SuggestionSelectedEventData<Ticker>
  ) => {
    addTicker(suggestion);
    setValue("");
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
        placeholder: "Search Stocks",
        value: value,
        onChange: changeHandler,
        className: "px-4 py-2 mb-1 border rounded shadow",
      }}
    />
  );
};

export default Search;
