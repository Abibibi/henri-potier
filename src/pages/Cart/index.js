import React from 'react';

import Layout from '../../layout';
import { HomeAllContentStyled } from '../Home/Home';
import CartStyled from './Cart';
import CartProduct from '../../components/CartProduct';


const Cart = ({ cartProducts, homeProducts }) => {
  const productsToDisplay = cartProducts.map((cartProductTitle) => homeProducts.filter((product) => product.title === cartProductTitle));
  
  console.log(productsToDisplay);

  return (
    <Layout>
      <HomeAllContentStyled>
        <h2>Mon panier</h2>
        <CartStyled>
          {}
        </CartStyled>
      </HomeAllContentStyled>
    </Layout>
  );
};

export default Cart;
