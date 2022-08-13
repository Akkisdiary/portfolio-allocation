import React from "react";
import { Ticker } from "../../../api";

interface ISuggestionProps {
  ticker: Ticker;
}

const Suggestion: React.FC<ISuggestionProps> = ({ ticker }) => {
  return (
    <div className="p-2 border rounded shadow text-start hover:bg-slate-100">
      <h3>{ticker.symbol}</h3>
      <p className="text-slate-500">{ticker.name}</p>
    </div>
  );
};

export default Suggestion;
