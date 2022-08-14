import '@testing-library/jest-dom';

global.ResizeObserver = require('resize-observer-polyfill');

jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: () => {},
}));
