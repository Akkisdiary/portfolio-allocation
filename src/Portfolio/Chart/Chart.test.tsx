import { cleanup, render } from '@testing-library/react';

import Manager from '../Manager';
import Chart from './Chart';
import { data } from '../../api/mock/server';

afterEach(cleanup);

describe('<Chart />', () => {
  it('should render chart from ticker data', () => {
    render(
      <Manager initialData={data}>
        <Chart />
      </Manager>
    );
  });
});
