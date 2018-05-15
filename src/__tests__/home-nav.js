import React from 'react';
import {shallow} from 'enzyme';

import { HomeNav } from '../components/home-nav';

describe('<HomeNav />', function() {
  it('Renders without crashing', function() {
    shallow(<HomeNav />);
  });
});
