import React from 'react';
import {shallow} from 'enzyme';

import { HomeBurger } from '../components/home-hamburger';

describe('<HomeBurger />', function() {
  it('Renders without crashing', function() {
    shallow(<HomeBurger />);
  });
});
