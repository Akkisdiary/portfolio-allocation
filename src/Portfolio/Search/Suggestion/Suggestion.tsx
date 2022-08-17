import cx from 'classnames';
import React from 'react';

import { TickerDetail } from '../../../api';

import type { RenderSuggestionParams } from 'react-autosuggest';

interface ISuggestionProps {
  suggestion: TickerDetail;
  params?: RenderSuggestionParams;
}

const Suggestion: React.FC<ISuggestionProps> = ({
  suggestion,
  params: { isHighlighted = false } = {},
}) => (
  <div
    className={cx(
      'z-40 flex cursor-pointer items-center bg-white px-4 py-1 text-sm text-slate-500 hover:bg-slate-100',
      {
        'bg-slate-200': isHighlighted,
      }
    )}
  >
    <div className="flex-1">
      <h4 className="text-slate-700">{suggestion.name}</h4>
      <p className="font-light">{suggestion.symbol}</p>
    </div>
    <p>{suggestion.exchange}</p>
  </div>
);

export default Suggestion;
