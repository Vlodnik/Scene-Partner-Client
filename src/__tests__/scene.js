import React from 'react';
import {shallow} from 'enzyme';

import { Scene } from '../components/scene';

describe('<Scene />', function() {
  it('Renders without crashing', function() {
    const dispatch = jest.fn();
    shallow(<Scene lines={[]} match={{params: ''}} dispatch={dispatch} />);
  });
});
