import React from 'react';
import {shallow} from 'enzyme';

import { LoginForm } from '../../components/login-form';

describe('<LoginForm />', function() {
  it('Renders without crashing', function() {
    shallow(<LoginForm handleSubmit={jest.fn()} />);
  });

  it('Submits data', function() {
    const onSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={onSubmit} />);
    const user = 'Robin';
    const pass = 'password';
    wrapper.find('input[id="user"]').value = user;
    wrapper.find('input[id="pass"]').value = pass;
    wrapper.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});
