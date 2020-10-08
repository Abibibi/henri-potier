import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HomeProduct from './index';
import HomeProductStyled from './HomeProduct';

describe('<HomeProduct />', () => {
  let wrapper;
  let HomeProductStyledComp;
  let button;

  beforeEach(() => {
    wrapper = shallow(<HomeProduct />);
    HomeProductStyledComp = wrapper.find(HomeProductStyled);
    button = HomeProductStyledComp.find('button');
  });

  it('should render a home product styled component', () => {
    expect(HomeProductStyledComp).to.have.lengthOf(1);
  });

  it('should render an image', () => {
    const image = HomeProductStyledComp.find('img');
    expect(image).to.have.lengthOf(1);
  });

  it('should render a price', () => {
    const price = HomeProductStyledComp.find('div');
    expect(price).to.have.lengthOf(1);
  });

  it('should render a title', () => {
    const title = HomeProductStyledComp.find('h3');
    expect(title).to.have.lengthOf(1);
  });

  it('should render an "add to cart" button', () => {
    expect(button).to.have.lengthOf(1);
  });

  describe('<button />', () => {
    it('should have a "submit" property', () => {
      expect(button.props()).to.have.property('type', 'submit');
    });
  });
});
