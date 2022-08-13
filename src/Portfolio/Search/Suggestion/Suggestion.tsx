import React from 'react';
import { Ticker } from '../../../api';

interface ISuggestionProps {
  ticker: Ticker;
}

const Suggestion: React.FC<ISuggestionProps> = ({ ticker }) => {
  return (
    <div className="text-sm text-slate-500 items-end flex bg-white px-4 py-1 hover:bg-slate-50 cursor-pointer">
      <div className="flex-1">
        <h4 className="text-slate-700">{ticker.name}</h4>
        <p className="font-light">{ticker.symbol}</p>
      </div>
      <p>{ticker.exchange}</p>
    </div>
  );
};

export default Suggestion;
