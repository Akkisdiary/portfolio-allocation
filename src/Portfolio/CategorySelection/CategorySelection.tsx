import React from 'react';
import { SelectableCategory } from '../Manager';

import { usePortfolio } from '../Manager/hooks';

const CategorySelection: React.FC = () => {
  const { selectableCategories, selectedCategory, updateSelectedCategory } = usePortfolio();

  const selectionChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    updateSelectedCategory(e.currentTarget.value as SelectableCategory);
  };

  return (
    <select
      value={selectedCategory}
      onChange={selectionChangeHandler}
      className="m-0 block rounded-t-md rounded-b-md border bg-slate-100 bg-clip-padding bg-no-repeat p-2 text-sm capitalize text-slate-700 shadow-sm transition hover:border-slate-500 focus:border-slate-500 focus:bg-white focus:shadow-md focus:outline-none active:rounded-b-none"
      data-testid="category-selection"
    >
      {selectableCategories.map((category, idx) => (
        <option key={idx} value={category} className="capitalize">
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelection;
