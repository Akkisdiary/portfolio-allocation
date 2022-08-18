import cx from 'classnames';
import React from 'react';

import { TickerDetail } from '../../../api';

import type { RenderSuggestionParams } from 'react-autosuggest';

interface ISuggestionProps {
  suggestion: TickerDetail;
  params?: RenderSuggestionParams;
}

const Suggestion: React.FC<ISuggestionProps> = ({ suggestion }) => (
  <>
    <div className="flex-1">
      <h4 className="text-slate-700">{suggestion.name}</h4>
      <p className="font-light">{suggestion.symbol}</p>
    </div>
    <p>{suggestion.exchange}</p>
  </>
);

export default Suggestion;
