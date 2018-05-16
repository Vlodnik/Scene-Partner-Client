import React from 'react';
import {shallow} from 'enzyme';

import { EditScene } from '../../components/edit-scene';

describe('<EditScene />', function() {
  it('Renders without crashing', function() {
    shallow(<EditScene lines={[]} />);
  });
});
