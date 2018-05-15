import React from 'react';
import {shallow} from 'enzyme';

import { Home } from '../components/home';

describe('<Home />', function() {
  it('Renders without crashing', function() {
    const dispatch = jest.fn();
    shallow(<Home scenes={[]} dispatch={dispatch} />);
  });
});
