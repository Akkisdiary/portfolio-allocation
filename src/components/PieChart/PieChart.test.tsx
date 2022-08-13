import { render } from '@testing-library/react';

import PieChart from './PieChart';

describe('<PieChart />', () => {
  it('should render with provided data', () => {
    const data = [
      {
        name: 'P1',
        value: 1,
        fill: 'red',
      },
      {
        name: 'P2',
        value: 2,
        fill: 'green',
      },
      {
        name: 'P3',
        value: 3,
        fill: 'blue',
      },
    ];
    render(<PieChart data={data} />);
  });
});
