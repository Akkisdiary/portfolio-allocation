import { useContext } from 'react';

import PortfolioCtx from './context';

export const usePortfolio = () => useContext(PortfolioCtx);
