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
      const h1Link = h1.find('a');
      expect(h1Link).to.have.lengthOf(1);
    });
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

    it('should render a label as a search bar name', () => {
      expect(label).to.have.lengthOf(1);
    });

    it('should render a label with a "book" htmlFor attribute', () => {
      expect(label.props()).to.have.property('htmlFor').which.equal('book');
    });

    it('should render an input as a search bar, nested in label', () => {
      const inputInLabel = label.find('input');
      expect(inputInLabel).to.have.lengthOf(1);
    });

    it('should render an input with a "book" id attribute', () => {
      expect(input.props()).to.have.property('id').which.equal('book');
    });

    it('should render an input with a "book" name attribute', () => {
      expect(input.props()).to.have.property('name').which.equal('book');
    });

    it('should render an input with a "book" name attribute', () => {
      expect(input.props()).to.have.property('name').which.equal('book');
    });

    it('should render an input with a "Veuillez saisir un titre de livre" title attribute', () => {
      expect(input.props()).to.have.property('title').which.equal('Veuillez saisir un titre de livre');
    });
  });

  describe('<a />', () => {
    let link;

    beforeEach(() => {
      link = HeaderStyledComp.find('a').at(1);
    });

    it('should render a link', () => {
      expect(link).to.have.lengthOf(1);
    });
  });
});
