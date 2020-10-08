import React from 'react';

import Layout from '../../layout';
import { HomeAllContentStyled, HomeProductsContentStyled } from '../Home';
import HomeProduct from '../../components/HomeProduct';


const SearchedProducts = ({ productsSearched }) => {
  const resultsNumber = productsSearched.length;

  const singleOrPluralResults = resultsNumber > 1 ? 'résultats' : 'résultat';

  return (
    <Layout>
      <HomeAllContentStyled>
        {productsSearched && <h2>{resultsNumber} {singleOrPluralResults}</h2>}
        {!productsSearched && <h2>La recherche n'a donné aucun résultat. Veuillez recommencer.</h2>}
        <HomeProductsContentStyled>
          {productsSearched?.map(({
            cover,
            price,
            title,
          }, index) => (
            <HomeProduct
              key={index}
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
