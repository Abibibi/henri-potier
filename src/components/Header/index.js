import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { HeaderContainer, HeaderStyled } from './Header';
import Logo from '../../styles/images/logo.png';


const Header = () => (
  <HeaderContainer>
    <HeaderStyled>
      <div>
        <h1><a><img src={Logo} alt="Logo de Henri Potier" /></a></h1>
        <a>
          <div><MdShoppingCart /></div>
          <div>Mon panier</div>
        </a>
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
  </HeaderContainer>
);

export default Header;
