import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../../src/components/Header';
import HeaderStyled from '../../src/components/Header/Header';


describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('should contain Header styled component', () => {
    const HeaderStyledComp = wrapper.find(HeaderStyled);
    expect(HeaderStyledComp).to.have.length(1);
  });
});
