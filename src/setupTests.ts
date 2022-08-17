import '@testing-library/jest-dom';
import 'jest-canvas-mock';

global.ResizeObserver = require('resize-observer-polyfill');

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
}));
