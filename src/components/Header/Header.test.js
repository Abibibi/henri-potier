import React from 'react';
import { Link } from 'react-router-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './index';
import { HeaderStyled } from './Header';


describe('<Header />', () => {
  let wrapper;
  let HeaderStyledComp;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    HeaderStyledComp = wrapper.find(HeaderStyled);
  });

  it('should render a Header styled component', () => {
    expect(HeaderStyledComp).to.have.lengthOf(1);
  });

  describe('<h1 />', () => {
    let h1;

    beforeEach(() => {
      h1 = HeaderStyledComp.find('h1');
    });

    it('should render a h1 as a logo', () => {
      expect(h1).to.have.lengthOf(1);
    });

    it('should render a link nested in h1 logo', () => {
      const h1Link = h1.find(Link);
      expect(h1Link).to.have.lengthOf(1);
    });

    it('should render an image nested in h1 link', () => {
      const imageH1 = h1.find('img');
      expect(imageH1).to.have.lengthOf(1);
    });
  });

  describe('<form />', () => {
    let form;
    let label;
    let input;
    let button;

    beforeEach(() => {
      form = HeaderStyledComp.find('form');
      label = form.find('label');
      input = form.find('input');
      button = form.find('button');
    });

    it('should render a label as a search bar name', () => {
      expect(label).to.have.lengthOf(1);
    });

    it('should render a label with a "book" htmlFor property', () => {
      expect(label.props()).to.have.property('htmlFor', 'book');
    });

    it('should render an input as a search bar', () => {
      expect(input).to.have.lengthOf(1);
    });

    it('should render an input with a "book" id property', () => {
      expect(input.props()).to.have.property('id', 'book');
    });

    it('should render an input with a "book" name property', () => {
      expect(input.props()).to.have.property('name', 'book');
    });

    it('should render an input with a "book" name property', () => {
      expect(input.props()).to.have.property('name', 'book');
    });

    it('should render an input with a "Veuillez saisir un titre de livre" title property', () => {
      expect(input.props()).to.have.property('title', 'Veuillez saisir un titre de livre');
    });

    it('should render a button', () => {
      expect(button).to.have.lengthOf(1);
    });

    it('should render a button with a "submit" type property', () => {
      expect(button.props()).to.have.property('type', 'submit');
    });
  });

  describe('Cart Link', () => {
    let link;

    beforeEach(() => {
      link = HeaderStyledComp.find(Link).at(1);
    });

    it('should render a link to cart page', () => {
      expect(link).to.have.lengthOf(1);
    });
  });
});
