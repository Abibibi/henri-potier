import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './index';
import HeaderStyled from './Header';


describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should contain Header styled component', () => {
    const HeaderStyledComp = wrapper.find(HeaderStyled);
    expect(HeaderStyledComp).to.have.length(1);
  });
});
