import React from 'react';

import HeaderStyled from './Header';


const Header = () => (
  <HeaderStyled>
    <div>
      <h1><a>Henri Potier</a></h1>
      <a>Votre panier</a>
    </div>
    <form>
      <label htmlFor="book">Rechercher un livre</label>
      <div>
        <input
          id="book"
          name="book"
          title="Veuillez saisir un titre de livre"
        />
        <button type="submit">Ok</button>
      </div>
    </form>
  </HeaderStyled>
);

export default Header;
