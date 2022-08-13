import { cleanup, render } from '@testing-library/react';

import Manager from '../Manager';
import Chart from './Chart';
import { tickerData } from './data';

afterEach(cleanup);

describe('<Chart />', () => {
  it('should render chart from ticker data', () => {
    render(
      <Manager initialData={tickerData}>
        <Chart />
      </Manager>
    );
  });
});
