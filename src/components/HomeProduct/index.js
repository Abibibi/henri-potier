import React from 'react';

import HomeProductStyled from './HomeProduct';
import ProductButton from '../../containers/ProductButton';

const HomeProduct = ({
  cover,
  price,
  title,
}) => (
  <HomeProductStyled>
    <img src={cover} alt={title} />
    <div>{price}€</div>
    <h3>{title}</h3>
    <ProductButton title={title} />
  </HomeProductStyled>
);

export default HomeProduct;
