import React from 'react';
import {shallow} from 'enzyme';

import LandingBurger from '../../components/landing-hamburger';

describe('<LandingBurger />', function() {
  it('Renders without crashing', function() {
    shallow(<LandingBurger />);
  });
});
