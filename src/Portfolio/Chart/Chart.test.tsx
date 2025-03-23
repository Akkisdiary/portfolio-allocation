import { cleanup, render } from '@testing-library/react';

import Manager from '../Manager';
import Chart from './Chart';
import { tickersData } from '../../api/mock/data';

afterEach(cleanup);

describe('<Chart />', () => {
  it('should render chart from ticker data', () => {
    render(
      <Manager>
        <Chart />
      </Manager>
    );
  });
});
