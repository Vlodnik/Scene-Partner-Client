import React from 'react';
import {shallow} from 'enzyme';

import { EditingLine } from '../../components/editing-line';

describe('<EditingLine />', function() {
  it('Renders without crashing', function() {
    shallow(<EditingLine />);
  });

  it('Submits with the users information', function() {
    const wrapper = shallow(<EditingLine />);

  })
});
