import React from 'react';
import {shallow} from 'enzyme';

import Input from '../../components/input';

describe('<Input />', function() {
  it('Renders without crashing', function() {
    shallow(<Input meta={{}} input={{name: ''}} />);
  });
});
