import * as React from 'react';
import { render } from '@testing-library/react';

import { Participants } from '..';

describe('<Participants  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Participants />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
