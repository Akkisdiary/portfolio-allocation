import { screen } from '@testing-library/react';

export const getSearchInput = () => screen.getByPlaceholderText<HTMLInputElement>(/search/i);
