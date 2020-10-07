import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../components/Header';
import Layout from './index';


describe('<Layout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it('should render Header', () => {
    const layoutHeader = wrapper.find(Header);
    expect(layoutHeader).to.have.length(1);
  });
});
