import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../layout';
import { HomeAllContentStyled } from '../Home/Home';
import CartStyled from './Cart';
import CartProduct from '../../components/CartProduct';


const Cart = ({ cartProducts, homeProducts }) => {
  const productsToDisplay = cartProducts.map((cartProductTitle) => homeProducts.filter((product) => product.title === cartProductTitle)[0]);

  return (
    <Layout>
      <HomeAllContentStyled>
        <h2>Mon panier</h2>
        <CartStyled>
          {!productsToDisplay.length && <p>Votre panier est vide. Retrouvez nos produits <Link to="/">sur cette page</Link>.</p>}
          {productsToDisplay.map(({
            cover,
            title,
            isbn,
            synopsis,
            price,
          }) => (
            <CartProduct
              key={title}
              cover={cover}
              title={title}
              isbn={isbn}
              synopsis={synopsis[0]}
              price={price}
            />
          ))}
        </CartStyled>
      </HomeAllContentStyled>
    </Layout>
  );
};

export default Cart;
