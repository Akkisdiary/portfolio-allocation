import React from 'react';

import { render } from '@testing-library/react';

import { tickerData } from './data';
import Portfolio from '../Portfolio';
import Chart from './Chart';

jest.mock("recharts", () => {
  const OriginalModule = jest.requireActual("recharts");
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe("<Chart />", () => {
  it("should render chart", () => {
    render(
      <Portfolio initialData={tickerData}>
        <Chart />
      </Portfolio>
    );
  });
});
