import React from 'react';
import {shallow} from 'enzyme';

import Landing from '../../components/landing';

describe('<Landing />', function() {
  it('Renders without crashing', function() {
    shallow(<Landing />);
  });
});
