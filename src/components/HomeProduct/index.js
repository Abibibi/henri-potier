import React from 'react';

import HomeProductStyled from './HomeProduct';


const HomeProduct = ({
  cover,
  price,
  title,
}) => (
  <HomeProductStyled>
    <img src={cover} alt={title} />
    <div>{price}€</div>
    <h3>{title}</h3>
    <button type="submit">Ajouter au panier</button>
  </HomeProductStyled>
);

export default HomeProduct;
