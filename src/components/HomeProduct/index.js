import React from 'react';

import HomeProductStyled from './HomeProduct';


const HomeProduct = () => (
  <HomeProductStyled>
    <img src="http://henri-potier.xebia.fr/hp0.jpg" alt="Henri Potier à l'école des sorciers" />
    <div>35€</div>
    <h3>Henri Potier à l'école des sorciers</h3>
    <button type="submit">Ajouer au panier</button>
  </HomeProductStyled>
);

export default HomeProduct;
