import React from 'react';

import Layout from '../../layout';
import { HomeAllContentStyled, HomeProductsContentStyled } from '../Home/Home';
import HomeProduct from '../../components/HomeProduct';


const SearchedProducts = ({ search, homeProducts }) => {
  const results = search === ''
    ? []
    : homeProducts.filter(({ title }) => (
      title.toUpperCase().includes(search.toUpperCase())
    ));

  const resultsNumber = results?.length ? results.length : 'Aucun';

  const resultsSingularOrPlural = resultsNumber > 1 ? 'résultats' : 'résultat';

  return (
    <Layout>
      <HomeAllContentStyled>
        <h2>{resultsNumber} {resultsSingularOrPlural}</h2>
        {!results.length && <p>Veuillez effectuer une nouvelle recherche à partir de la barre de recherche ci-dessus.</p>}
        <HomeProductsContentStyled>
          {search && results?.map(({
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
