import React from 'react';

import HomeProductStyled from './HomeProduct';


const HomeProduct = ({
  cover,
  price,
  title,
  cartChanges,
  cartProducts,
}) => {
  const addRemoveProduct = ({ target: { id: clickedProductTitle } }) => {
    let updatedCartProducts;

    console.log('clicked title' + clickedProductTitle);

    if (cartProducts.length) {
      cartProducts.map((titleToSeekFor) => {
        console.log('title to seek for' + titleToSeekFor);
        if (clickedProductTitle === titleToSeekFor) {
          updatedCartProducts = cartProducts.filter((titleToKeep) => titleToKeep !== clickedProductTitle);
          console.log('removed products' + updatedCartProducts);
        }
        else if (clickedProductTitle !== titleToSeekFor) {
          updatedCartProducts = [...cartProducts, clickedProductTitle];
          console.log('added products' + updatedCartProducts);
        }
        updatedCartProducts = cartProducts.filter((titleToKeep) => titleToKeep !== titleToKeep);
        return updatedCartProducts;
      });
    }
    else {
      updatedCartProducts = [clickedProductTitle];
    }

    cartChanges(updatedCartProducts);
  };

  const productInCart = cartProducts ? cartProducts.find(({ title: productTitle }) => productTitle === title) : false;

  const cartButtonText = productInCart ? 'Retirer du panier' : 'Ajouter au panier';

  return (
    <HomeProductStyled>
      <img src={cover} alt={title} />
      <div>{price}€</div>
      <h3>{title}</h3>
      <button id={title} type="submit" onClick={addRemoveProduct}>{cartButtonText}</button>
    </HomeProductStyled>
  );
};

export default HomeProduct;
