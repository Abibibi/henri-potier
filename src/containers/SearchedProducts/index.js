// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SearchedProducts from '../../pages/SearchedProducts';


const mapStateToProps = (state, ownProps) => ({
  search: state.search,
});

// Container
const SearchedProductsContainer = connect(
  mapStateToProps,
)(SearchedProducts);

// == Export
export default SearchedProductsContainer;
