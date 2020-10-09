import React from 'react';

import CartProductStyled from './CartProduct';
import ProductButton from '../../containers/ProductButton';

const CartProduct = ({
  cover,
  title,
  isbn,
  synopsis,
  price,
}) => (
  <CartProductStyled>
    <div>
      <img src={cover} alt={title} />
    </div>
    <div>
      <div>
        <h3>{title}</h3>
        <p>ISBN : {isbn}</p>
        <p>{synopsis}</p>
      </div>
      <div>{price}€</div>
    </div>
    <ProductButton title={title} />
  </CartProductStyled>
);

export default CartProduct;
