import React from 'react';
import {shallow} from 'enzyme';

import NewLine from './new-line';

describe('<NewLine />', function() {
  it('Renders without crashing', function() {
    shallow(<NewLine />);
  });
});
