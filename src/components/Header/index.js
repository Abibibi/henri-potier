import React from 'react';

import HeaderStyled from './Header';

const Header = () => (
  <HeaderStyled>
    <h1>Henri Potier</h1>
    <form>
      <label>Rechercher un livre
        <input />
      </label>
    </form>
  </HeaderStyled>
);

export default Header;
