import React from 'react';
import {shallow} from 'enzyme';

import { LoginPage } from '../components/login-page';

describe('<LoginPage />', function() {
  it('Renders without crashing', function() {
    shallow(<LoginPage />);
  });
});
