import React from 'react';
import {shallow} from 'enzyme';

import Footer from '../../components/footer';

describe('<Footer />', function() {
  it('Renders without crashing', function() {
    shallow(<Footer />);
  });
});
