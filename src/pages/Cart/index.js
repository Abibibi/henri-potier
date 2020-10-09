import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../layout';
import { HomeAllContentStyled } from '../Home/Home';
import { CartStyled, TotalCartStyled } from './Cart';
import CartProduct from '../../components/CartProduct';


const Cart = ({
  cartProducts,
  homeProducts,
  subtotalAndISBNSCollected,
  offersCalled,
  bestOffer,
}) => {
  const productsToDisplay = cartProducts.map((cartProductTitle) => homeProducts.filter((product) => product.title === cartProductTitle)[0]);

  const subtotal = productsToDisplay.reduce((total, { price }) => price + total, 0);

  const allISBNs = productsToDisplay.map(({ isbn }) => isbn).join(',');

  useEffect(() => {
    subtotalAndISBNSCollected(subtotal, allISBNs);

    offersCalled();
  }, []);

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
        {productsToDisplay.length !== 0
        && (
        <TotalCartStyled>
          <section>
            <div>Sous-total</div>
            <div>{subtotal}€</div>
          </section>
          <section>
            <div>Remise</div>
            {bestOffer.type === 'percentage' && <div>-{bestOffer.value}%</div>}
            {(bestOffer.type === 'minus' || bestOffer.type === 'slice') && <div>-{bestOffer.value}€</div>}
          </section>
          <section>
            <div>Total </div>
            <div>{bestOffer.total}€</div>
          </section>
        </TotalCartStyled>
        )}
      </HomeAllContentStyled>
    </Layout>
  );
};

export default Cart;
