import React from 'react';
import {shallow} from 'enzyme';

import { Options } from '../components/options';

describe('<Options />', function() {
  it('Renders without crashing', function() {
    shallow(<Options lines={[]} />);
  });
});
