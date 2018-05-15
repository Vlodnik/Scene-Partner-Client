import React from 'react';
import {shallow} from 'enzyme';

import { NewScene } from '../components/new-scene';

describe('<NewScene />', function() {
  it('Renders without crashing', function() {
    shallow(<NewScene />);
  });
});
