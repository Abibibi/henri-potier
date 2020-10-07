import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from './index';
import FooterStyled from './Footer';


describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('should render footer styled component', () => {
    const FooterStyledComp = wrapper.find(FooterStyled);
    expect(FooterStyledComp).to.have.lengthOf(1);
  });
});
