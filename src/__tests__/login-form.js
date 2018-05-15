import React from 'react';
import {shallow} from 'enzyme';

import { LoginForm } from '../components/login-form';

describe('<LoginForm />', function() {
  it('Renders without crashing', function() {
    shallow(<LoginForm handleSubmit={jest.fn()} />);
  });
});
