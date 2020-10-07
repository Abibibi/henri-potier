import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Layout from './index';
import Header from '../components/Header';
import InnerLayout from './InnerLayout';


describe('<Layout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it('should render Header', () => {
    const layoutHeader = wrapper.find(Header);
    expect(layoutHeader).to.have.length(1);
  });

  it('should render inner layout', () => {
    const innerLayout = wrapper.find(InnerLayout);
    expect(innerLayout).to.have.length(1);
  });
});
