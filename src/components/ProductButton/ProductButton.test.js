import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ProductButton from './index';

describe('<ProductButton />', () => {
  let wrapper;
  let button;

  beforeEach(() => {
    wrapper = shallow(<ProductButton />);
    button = wrapper.find('button');
  });

  it('should render a button with a submit property', () => {
    expect(button.props()).to.have.property('type', 'submit');
  });
});
