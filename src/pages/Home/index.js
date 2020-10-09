import React from 'react';

import Layout from '../../layout';
import { HomeAllContentStyled, HomeProductsContentStyled } from './Home';
import HomeProduct from '../../components/HomeProduct';


const Home = ({ homeProducts }) => (
  <Layout>
    <HomeAllContentStyled>
      <h2>Tous les livres Henri Potier</h2>
      <HomeProductsContentStyled>
        {homeProducts?.map(({
          cover,
          price,
          title,
        }, index) => (
          <HomeProduct
            key={title}
            cover={cover}
            price={price}
            title={title}
          />
        ))}
      </HomeProductsContentStyled>
    </HomeAllContentStyled>
  </Layout>
);

export default Home;
