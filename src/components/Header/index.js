import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { HeaderContainer, HeaderStyled } from './Header';
import Logo from '../../styles/images/logo.png';


const Header = ({ search, searchInputModified }) => { 
  const handleChange = ({ target: { value } }) => {
    searchInputModified(value);
  };

  return (
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
              value={search}
              onChange={handleChange}
            />
            <button type="submit">Ok</button>
          </div>
        </form>
      </HeaderStyled>
    </HeaderContainer>
  );
}

export default Header;
