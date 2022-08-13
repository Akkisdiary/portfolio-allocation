import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transformIgnorePatterns: ['/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates)'],
};

export default config;
