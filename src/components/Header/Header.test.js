import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './index';
import HeaderStyled from './Header';


describe('<Header />', () => {
  let wrapper;
  let HeaderStyledComp;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    HeaderStyledComp = wrapper.find(HeaderStyled);
  });

  it('should render a Header styled component', () => {
    expect(HeaderStyledComp).to.have.length(1);
  });

  it('should render a h1', () => {
    const h1 = HeaderStyledComp.find('h1');
    expect(h1).to.have.length(1);
  });

  describe('<form />', () => {
    let form;
    let label;
    let input;

    beforeEach(() => {
      form = HeaderStyledComp.find('form');
      label = form.find('label');
      input = form.find('input');
    });

    it('should render a search bar', () => {
      expect(input).to.have.length(1);
    });
  });
});
