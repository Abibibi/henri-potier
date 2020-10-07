import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from './index';
import Layout from '../../layout';
import HomeStyled from './Home';

describe('<Home />', () => {
  let wrapper;
  let HomeStyledComp;

  beforeEach(() => {
    wrapper = shallow(<Home />);
    HomeStyledComp = wrapper.find(HomeStyled);
  });

  it('should render layout', () => {
    const homeLayout = wrapper.find(Layout);
    expect(homeLayout).to.have.lengthOf(1);
  });

  it('should render a Home styled component', () => {
    expect(HomeStyledComp).to.have.lengthOf(1);
  });
});
