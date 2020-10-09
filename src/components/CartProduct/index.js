import React from 'react';

import CartProductStyled from './CartProduct';
import ProductButton from '../../containers/ProductButton';

const CartProduct = ({
  cover,
  title,
  synopsis,
  price,
}) => (
  <CartProductStyled>
    <img src={cover} alt={title} />
    <div>
      <h3>{title}</h3>
      <p>{synopsis}</p>
      <div>{price}€</div>
    </div>
    <ProductButton title={title} />
  </CartProductStyled>
);

export default CartProduct;
