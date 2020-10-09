import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { HeaderContainer, HeaderStyled } from './Header';
import Logo from '../../styles/images/logo.png';


const Header = ({
  search,
  searchInputModified,
}) => {
  const [redirect, setRedirect] = useState(false);

  const handleChange = ({ target: { value } }) => {
    searchInputModified(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setRedirect(true);
  };

  return (
    <HeaderContainer>
      <HeaderStyled>
        <div>
          <h1><Link to="/"><img src={Logo} alt="Logo de Henri Potier" /></Link></h1>
          <Link>
            <div><MdShoppingCart /></div>
            <div>Mon panier</div>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
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
      {redirect && <Redirect to="/search" />}
    </HeaderContainer>
  );
};

export default Header;
