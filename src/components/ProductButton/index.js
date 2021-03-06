import React from 'react';
import classNames from 'classnames';

import ProductButtonStyled from './ProductButton';


const ProductButton = ({
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

    if (cartProducts?.length) {
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
    <ProductButtonStyled
      type="submit"
      id={title}
      className={buttonClass}
      onClick={addRemoveProduct}
    >
      {cartButtonText}
    </ProductButtonStyled>
  );
};

export default ProductButton;
