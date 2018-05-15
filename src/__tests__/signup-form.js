import React from 'react';
import {shallow} from 'enzyme';

import { SignupForm } from '../components/signup-form';

describe('<SignupForm />', function() {
  it('Renders without crashing', function() {
    shallow(<SignupForm handleSubmit={jest.fn()}/>);
  });

  it('Submits data', function() {
    const onSubmit = jest.fn();
    const wrapper = shallow(<SignupForm handleSubmit={onSubmit} />);
    const user = 'Robin';
    const pass = 'password';
    wrapper.find('input[id="username"]').value = user;
    wrapper.find('input[id="password"]').value = pass;
    wrapper.find('input[id="pass-confirm"]').value = pass;
    wrapper.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});
