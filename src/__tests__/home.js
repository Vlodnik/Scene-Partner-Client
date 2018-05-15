import React from 'react';
import {shallow} from 'enzyme';

import { Home } from '../components/home';

describe('<Home />', function() {
  it('Renders without crashing', function() {
    const dispatch = jest.fn();
    shallow(<Home scenes={[]} dispatch={dispatch} />);
  });

  it('Displays loading image if state is loading', function() {
    const dispatch = jest.fn();
    const wrapper = shallow(<Home scenes={[]} dispatch={dispatch} loading={true} />);
    const loadImg = wrapper.find('img');
    expect(loadImg.hasClass('loading')).toEqual(true);
  });
});
