import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import Home from './index';
import Layout from '../../layout';
import { HomeAllContentStyled } from './Home';
import HomeProduct from '../../components/HomeProduct';


describe('<Home />', () => {
  let wrapper;
  let HomeAllContentStyledComp;

  beforeEach(() => {
    wrapper = shallow(<Home />);
    HomeAllContentStyledComp = wrapper.find(HomeAllContentStyled);
  });

  it('should render layout', () => {
    const homeLayout = wrapper.find(Layout);
    expect(homeLayout).to.have.lengthOf(1);
  });

  it('should render a Home styled component', () => {
    expect(HomeAllContentStyledComp).to.have.lengthOf(1);
  });
});
