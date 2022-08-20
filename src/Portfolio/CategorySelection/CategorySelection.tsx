import React from 'react';

import { Select } from '../../components';
import { usePortfolio } from '../Manager';

import type { SelectableCategory } from '../Manager';

const CategorySelection: React.FC = () => {
  const { selectableCategories, selectedCategory, updateSelectedCategory } = usePortfolio();

  const selectionChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    updateSelectedCategory(e.currentTarget.value as SelectableCategory);
  };

  return (
    <Select
      value={selectedCategory}
      onChange={selectionChangeHandler}
      options={selectableCategories}
      data-testid="category-selection"
    />
  );
};

export default CategorySelection;
