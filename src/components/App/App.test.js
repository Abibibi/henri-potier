import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './index';
import Home from '../../containers/Home';


describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render Home page', () => {
    const HomePage = wrapper.find(Home);
    expect(HomePage).to.have.lengthOf(1);
  });
});
