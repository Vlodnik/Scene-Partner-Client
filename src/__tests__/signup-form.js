import React from 'react';
import {shallow} from 'enzyme';

import { SignupForm } from '../components/signup-form';

describe('<SignupForm />', function() {
  it('Renders without crashing', function() {
    shallow(<SignupForm handleSubmit={jest.fn()}/>);
  });
});
