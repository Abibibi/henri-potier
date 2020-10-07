import React from 'react';

import HeaderStyled from './Header';


const Header = () => (
  <HeaderStyled>
    <h1><a>Henri Potier</a></h1>
    <form>
      <label htmlFor="book">Rechercher un livre
        <input
          id="book"
          name="book"
          title="Veuillez saisir un titre de livre"
        />
      </label>
      <a>Votre panier</a>
    </form>
  </HeaderStyled>
);

export default Header;
