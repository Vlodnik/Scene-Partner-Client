import React from 'react';
import {shallow} from 'enzyme';

import NewLine from '../../components/new-line';

describe('<NewLine />', function() {
  it('Renders without crashing', function() {
    shallow(<NewLine />);
  });
});
