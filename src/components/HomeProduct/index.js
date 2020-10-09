import React from 'react';
import classNames from 'classnames';

import HomeProductStyled from './HomeProduct';


const HomeProduct = ({
  cover,
  price,
  title,
  cartChanges,
  cartProducts,
}) => {
  const productInCart = cartProducts?.find((productTitle) => productTitle === title);

  const cartButtonText = productInCart ? 'Retirer du panier' : 'Ajouter au panier';

  const buttonClass = classNames({
    'cart-remove': productInCart,
  });

  const addRemoveProduct = ({ target: { id: clickedProductTitle } }) => {
    let updatedCartProducts;

    if (cartProducts.length) {
      if (productInCart) {
        updatedCartProducts = cartProducts.filter((anyTitle) => anyTitle !== clickedProductTitle);
      }
      else {
        updatedCartProducts = [...cartProducts, clickedProductTitle];
      }
    }
    else {
      updatedCartProducts = [clickedProductTitle];
    }

    cartChanges(updatedCartProducts);
  };

  return (
    <HomeProductStyled>
      <img src={cover} alt={title} />
      <div>{price}€</div>
      <h3>{title}</h3>
      <button
        type="submit"
        id={title}
        className={buttonClass}
        onClick={addRemoveProduct}
      >
        {cartButtonText}
      </button>
    </HomeProductStyled>
  );
};

export default HomeProduct;
