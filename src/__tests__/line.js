import React from 'react';
import {shallow} from 'enzyme';

import { Line } from '../components/line';

describe('<Line />', function() {
  it('Renders without crashing', function() {
    shallow(<Line />);
  });
});
