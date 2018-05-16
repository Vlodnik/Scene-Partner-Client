import React from 'react';
import {shallow} from 'enzyme';

import { SignupPage } from '../../components/signup-page';

describe('<SignupPage />', function() {
  it('Renders without crashing', function() {
    shallow(<SignupPage />);
  });
});
