import React from 'react';

import { Select } from '../../components';
import { usePortfolio } from '../Manager';
import { SELECTABLE_CATEGORIES } from '../Manager/constants';

import type { SelectableCategory } from '../Manager';

const CategorySelection: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = usePortfolio();

  const selectionChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.currentTarget.value as SelectableCategory);
  };

  return (
    <Select
      value={selectedCategory}
      onChange={selectionChangeHandler}
      options={SELECTABLE_CATEGORIES}
      data-testid="category-selection"
    />
  );
};

export default CategorySelection;
