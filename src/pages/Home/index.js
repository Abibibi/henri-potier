import React from 'react';

import Layout from '../../layout';
import { HomeAllContentStyled, HomeProductsContentStyled } from './Home';
import HomeProduct from '../../components/HomeProduct';


const Home = () => {

  return (
    <Layout>
      <HomeAllContentStyled>
        <h2>Tous les livres Henri Potier</h2>
        <HomeProductsContentStyled>
          <HomeProduct />
        </HomeProductsContentStyled>
      </HomeAllContentStyled>
    </Layout>
  );
};

export default Home;
