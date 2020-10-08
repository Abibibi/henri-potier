// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SearchedProducts from '../../pages/SearchedProducts';


const mapStateToProps = (state, ownProps) => ({
  search: state.search,
  homeProducts: state.homeProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

// Container
const SearchedProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchedProducts);

// == Export
export default SearchedProductsContainer;
