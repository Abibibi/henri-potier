import React from 'react';

import HomeProductStyled from './HomeProduct';
import ProductButton from '../../containers/ProductButton';

const HomeProduct = ({
  cover,
  price,
  title,
}) => (
  <HomeProductStyled>
    <div>
      <img src={cover} alt={title} />
    </div>
    <div>{price}€</div>
    <h3>{title}</h3>
    <ProductButton title={title} />
  </HomeProductStyled>
);

export default HomeProduct;
