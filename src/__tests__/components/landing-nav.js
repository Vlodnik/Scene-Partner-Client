import React from 'react';
import {shallow} from 'enzyme';

import LandingNav from '../../components/landing-nav';

describe('<LandingNav />', function() {
  it('Renders without crashing', function() {
    shallow(<LandingNav />);
  });
});
