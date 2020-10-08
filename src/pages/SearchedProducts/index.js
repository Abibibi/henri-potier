import React from 'react';

import Layout from '../../layout';
import { HomeAllContentStyled, HomeProductsContentStyled } from '../Home/Home';
import HomeProduct from '../../components/HomeProduct';


const SearchedProducts = ({ search, homeProducts }) => {
  const results = homeProducts.filter(({ title }) => (
    title.toUpperCase().includes(search.toUpperCase())
  ));

  return (
    <Layout>
      <HomeAllContentStyled>
        <h2>Résultats de la recherche</h2>
        <HomeProductsContentStyled>
          {search && results.map(({
            cover,
            price,
            title,
          }) => (
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
};

export default SearchedProducts;
